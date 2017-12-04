import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import{ConvertToSpacepipes} from './shared/convert-to-spaces.pipes';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSpacepipes
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
