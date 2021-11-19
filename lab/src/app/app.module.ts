import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Lab1KosenkoComponent } from './lab1-kosenko/lab1-kosenko.component';

@NgModule({
  declarations: [
    AppComponent,
    Lab1KosenkoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
