import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { PasswordMeterComponent } from './password-meter.component'; 

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, PasswordMeterComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
