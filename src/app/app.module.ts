import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ModalComponent } from './modal/modal.component';
import { ExempleComponent } from './popins/exemple/exemple.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    ExempleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ModalComponent, ExempleComponent]
})
export class AppModule { }
