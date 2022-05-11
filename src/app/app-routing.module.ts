import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { CategoryComponent } from './category/category.component';

const routes: Routes = [
  {path:'', component:ProductsComponent},
  {path:'cart',component:CartComponent},
  {path:'category',component: CategoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true} )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const navlinks = [ProductsComponent,CartComponent,]
