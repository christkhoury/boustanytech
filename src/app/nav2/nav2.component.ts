import { Component, OnInit, } from '@angular/core';
import { CartService } from '../services/cart.service';


@Component({
  selector: 'app-nav2',
  templateUrl: './nav2.component.html',
  styleUrls: ['./nav2.component.css']
})
export class Nav2Component implements OnInit {
 term;
  total: any
  constructor(private cartservice:CartService) { }
  
  ngOnInit(): void {
    this.setcart()
  }

  setcart(){
    this.cartservice.setcart()
    let totals = this.cartservice.cart
    this.total = totals.length
    console.log(this.total)
  }

}
