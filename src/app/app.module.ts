import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ButtonsComponent } from './module/buttons/components/buttons/buttons.component';
import { NavComponent } from './shared/template/nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonsComponent,
    NavComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule{ }
