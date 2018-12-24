import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PanjaangamComponent } from './panjaangam/panjaangam.component';

@NgModule({
  declarations: [
    AppComponent,
    PanjaangamComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
