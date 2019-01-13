import { Component, OnInit, EventEmitter, Output, Input, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Output()
  close = new EventEmitter();

  @Input()
  component: { component: any; props: any };

  @ViewChild('template', { read: ViewContainerRef })
  container: ViewContainerRef;

  constructor(private resolver: ComponentFactoryResolver) {}

  ngOnInit() {
    const factory = this.resolver.resolveComponentFactory(this.component.component);
    const ref = this.container.createComponent(factory);
    if (this.component.props) {
      Object.assign(ref.instance, this.component.props);
    }
  }

  onClose() {
    this.close.emit();
  }
}
