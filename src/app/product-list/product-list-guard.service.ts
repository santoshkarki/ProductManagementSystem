import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';



@Injectable()
export class ProductListGuardService implements  CanActivate{

  constructor(private router : Router) { }

  canActivate(route : ActivatedRouteSnapshot): boolean {
    let id = +route.url[1].path;
    if(isNaN(id) || id<1){
          alert("Invalid product ID");
          this.router.navigate(['/productList'])
          return false;
    }
    return true;
  }

}
