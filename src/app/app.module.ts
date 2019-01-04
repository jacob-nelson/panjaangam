import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PanjaangamComponent } from './panjaangam/panjaangam.component';
import { VaarshikaPanjaangamComponent } from './vaarshika-panjaangam/vaarshika-panjaangam.component';
import { MaasikaPanjaangamComponent } from './maasika-panjaangam/maasika-panjaangam.component';


@NgModule({
  declarations: [
    AppComponent,
    PanjaangamComponent,
    VaarshikaPanjaangamComponent,
    MaasikaPanjaangamComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
