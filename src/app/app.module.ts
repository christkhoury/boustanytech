import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, navlinks } from './app-routing.module';
import { AppComponent } from './app.component';
import { Nav2Component } from './nav2/nav2.component';
import { BackgroundComponent, } from './background/background.component';
import { ProductsComponent } from './products/products.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductsSvc } from 'src/ProductsSvc';
import { FooterComponent } from './footer/footer.component';
import { FilterPipe } from 'src/shared/filter.pipe';
import { FormsModule } from '@angular/forms';
// import { SearchbarComponent } from './searchbar/searchbar.component';
import {Ng2SearchPipeModule} from 'ng2-search-filter'
import { CartComponent } from './cart/cart.component';
import { CategoryComponent } from './category/category.component';





@NgModule({
  declarations: [
    AppComponent,
    Nav2Component,
    ProductsComponent,
    FooterComponent,
    FilterPipe,
    BackgroundComponent,
    // SearchbarComponent,

    CartComponent,
     CategoryComponent,

  ],
  imports: [
    BrowserModule,
    Ng2SearchPipeModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ProductsSvc],
  bootstrap: [AppComponent,ProductsComponent]
})
export class AppModule { }
