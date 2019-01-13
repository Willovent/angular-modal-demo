import { Component, ViewChild, ViewContainerRef, OnInit, ComponentFactoryResolver } from '@angular/core';
import { ModalService } from './modal.service';
import { ModalComponent } from './modal/modal.component';
import { Subscription } from 'rxjs';
import { ExempleComponent } from './popins/exemple/exemple.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild('modalContainer', { read: ViewContainerRef })
  modalContainer: ViewContainerRef;

  constructor(private modalService: ModalService, private resolver: ComponentFactoryResolver) {
  }

  ngOnInit() {
    const factory = this.resolver.resolveComponentFactory(ModalComponent);

    this.modalService.component$.subscribe(modal => {
      this.modalContainer.clear();
      const modalRef = this.modalContainer.createComponent(factory);
      modalRef.instance.component = modal;

      let sub: Subscription;
      const cleanUp = () => { this.modalContainer.clear(); sub.unsubscribe(); };
      sub = modalRef.instance.close.subscribe(cleanUp);
      modalRef.onDestroy(cleanUp);
    });
  }

  openModal() {
    this.modalService.openInModal(ExempleComponent, { name: 'John Doe' });
  }
}
