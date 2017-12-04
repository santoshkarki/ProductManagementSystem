import { Component, OnInit } from '@angular/core';
import {IProduct} from '../product'
import { ProductService } from './product.service';

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  pageTitle: String = 'Product List';
  imageWidth : number = 50;
  imageMargin : number = 2;
  showImage : boolean =false;
  ratingClicked : string;

  _listFilter:string;
  get listFilter(): string{
    return this._listFilter;
}

set listFilter(value:string){
     this._listFilter = value;
     this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter): this.products;
}
  filteredProducts: IProduct[];
  
  products: IProduct[] = [ ]

  performFilter(filterBy: string) :IProduct[]{
      filterBy = filterBy.toLocaleLowerCase();
      return this.products.filter((product: IProduct)=>
        product.productName.toLocaleLowerCase().indexOf(filterBy)!== -1);
  }
  

  constructor(private productService: ProductService) {
   }

   onRatingClicked(message: string): void {
    this.ratingClicked = this.ratingClicked!=null ? message: '';

   }

  ngOnInit() {
      this.products = this.productService.getProducts();
      this.filteredProducts=this.products;
  }

  toggleImage():void{
    this.showImage = !this.showImage;
  }

  
  
}
