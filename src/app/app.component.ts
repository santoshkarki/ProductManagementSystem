import { Component } from '@angular/core';
import { ProductService } from './product-list/product.service';

@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[ProductService]
})
export class AppComponent {
  pageTitle : String = 'Our Product Management';
}
