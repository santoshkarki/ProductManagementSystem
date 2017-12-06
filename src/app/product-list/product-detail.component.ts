import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { IProduct } from '../product';
import { ProductService } from './product.service';
import { Observable } from 'rxjs/Observable';


@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  pageTitle : string = 'Product Detail';
  product: IProduct;
  sub: any;


  constructor(private route : ActivatedRoute, private  productService : ProductService) { }

  ngOnInit(){
     let id = +this.route.snapshot.paramMap.get('id');
     this.pageTitle += `:${id}`;
     this.product = {
      "productId": id,
      "productName": "Leaf Rake",
      "productCode": "GDN-0011",
      "releaseDate": "March 19, 2016",
      "description": "Leaf rake with 48-inch wooden handle.",
      "price": 19.95,
      "starRating": 3.2,
      "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
     }
     
    
    
  }

    }
