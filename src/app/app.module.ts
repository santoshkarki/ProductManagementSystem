import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import{ConvertToSpacepipes} from './shared/convert-to-spaces.pipes';
import { StarComponent } from './shared/star.component';
import {HttpClientModule} from '@angular/common/http';
import { ProductDetailComponent } from './product-list/product-detail.component';
import { WelcomeComponent } from './home/welcome.component';
import {RouterModule}  from '@angular/router'
import { appRouterModule } from './app.routes';


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSpacepipes,
    StarComponent,
    ProductDetailComponent,
    WelcomeComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    appRouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
