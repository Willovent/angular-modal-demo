import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private componentSubject = new Subject<{ component: any; props: any }>();
  component$ = this.componentSubject.asObservable();

  constructor() { }

  openInModal(component, props = null) {
    this.componentSubject.next({ component, props });
  }
}
