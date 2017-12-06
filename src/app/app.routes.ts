import { Routes, RouterModule } from "@angular/router";
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductDetailComponent } from "./product-list/product-detail.component";
import { WelcomeComponent } from "./home/welcome.component";



const routes: Routes = [
    {path: 'productList', component: ProductListComponent},
    {path: 'products/:id', component: ProductDetailComponent},
    {path: 'welcome', component: WelcomeComponent},
    {path: '', redirectTo: 'welcome', pathMatch: 'full'},
    {path: '**', redirectTo: 'welcome', pathMatch: 'full'}   
];

export const appRouterModule = RouterModule.forRoot(routes);