import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CircleModule } from 'circle-component';

import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule, CircleModule],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
