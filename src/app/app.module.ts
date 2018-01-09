import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from "@angular/http";

import { AppComponent } from './app.component';
import { AppRouting } from './app.routing';
import { LibModule } from './lib/lib.module';
import { ErrorComponent } from './pages/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    LibModule, 
    AppRouting
  ],
  declarations: [ AppComponent, ErrorComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
