import { Component, OnInit } from '@angular/core';
import {ProductsSvc} from 'src/ProductsSvc';
import { CartService } from '../services/cart.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
    url: string = 'http://localhost:3000/Products';
searchText: any = [];
usersArray: any = [];
filteredString: string = '' ; 
 lists = [
    {
        "id": 1,
        "name": "Tp-Link router",
        "speed": "\t350 Mbit/s",
        "Description": "Tp-link wirless router with wirless speed of 300mbps",
        "price": "35$",
        "image": "https://th.bing.com/th/id/OIP.ENUcnrO-QwBV4dJwdP1VZAHaHa?pid=ImgDet&rs=1"
    },
    {
        "id": 2,
        "name": "Tp-Link router",
        "speed": "\t300 Mbit/s",
        "Description": "Tp-link wirless router with wirless speed o     300mbps,With 1year warranty",
        "price": "33$",
        "image": "https://th.bing.com/th/id/OIP.vldgH1JpBe0fLkZufQnPwwHaHa?pid=ImgDet&rs=1"
    },
    {
        "id": 3,
        "name": "Tp-Link router",
        "speed": "\t300 Mbit/s",
        "Description": "Tp-link Multi-Mode router with wirless speed of 300mbps",
        "price": "25$",
        "image": "https://th.bing.com/th/id/OIP.qtoIqyUGigsJl-k-IM3g1QHaHa?pid=ImgDet&rs=1"
    },
    {
        "id": 4,
        "name": "Microtic lite5",
        "Brand": "Microtik",
        "Description": "improved antenna design, added Gigabit Ethernet port and 802.11a/n/ac support to achieve even more speed on longer distances. ",
        "price": "85$",
        "image": "https://cdn.awsli.com.br/800x800/1734/1734800/produto/73739054/sxt-lite-5-sxt-5nd-r2-mikrotik-0f8508d0.jpg"
    },
    {
        "id": 5,
        "name": "Microtik sq5",
        "speed": "\t300 Mbit/s",
        "Description": "The SXTsq 5 is a compact and lightweight outdoor wireless device with an integrated antenna, perfect for point-to-point links or as a CPE unit. It is compact, weatherproof and easy to mount.",
        "price": "55$",
        "image": "https://i.mt.lv/cdn/rb_images/1359_m.png"
    },
    {
        "id": 6,
        "name": "Adapter",
        "Description": "AC/DC Adapter",
        "price": "5$",
        "image": "https://th.bing.com/th/id/R.675c05494a44f43e30d502e1e9ab2c1b?rik=HOzObfCDLUuujQ&riu=http%3a%2f%2fwww.markertek.com%2fproductImage%2falternate-2%2fhi-res%2fSTD-12020U.JPG&ehk=TVE6i1wd0Bykv%2bMvjMeIFqNXnBAUHt2yddh0hJ0o094%3d&risl=&pid=ImgRaw&r=0"
    },
    {
        "id": 7,
        "name": "LHG XL ac 5",
        "Description": "LHG XL 5 ac Dual chain Long Range 27dBi 5GHz CPE/Point-to-Point Integrated Antenna with AC support and Gigabit Ethernet.",
        "price": "85$",
        "image": "https://th.bing.com/th/id/OIP.QX7XjDoht_BlTc3dJP9QYAHaHa?pid=ImgDet&rs=1"
    },
    {
        "id": 8,
        "name": "SXT SA5 ac",
        "speed": " up to 540Mbit",
        "Description": "SXT SA5 ac The new AC standard is here, with up to 866Mbit over the air datarate, 256-QAM modulation, and 80MHz channels. 802.11a/n/ac opens up new possibilities and speeds never possible before.",
        "price": "120$",
        "image": "https://th.bing.com/th/id/R.7ada56ced67ef222a4ca196599052c0e?rik=MYW0kEa%2fSu%2fBLA&pid=ImgRaw&r=0"
    },
    {
        "id": 9,
        "name": "Netis",
        "Description": "The netis ST3116P Fast Ethernet Rackmount Switch provides 16 10/100Mbps Auto-Negotiation RJ45 ports .It is ideal for the small and medium office use. All ports support Auto MDI/MDIX function, eliminating the need for crossover cables or uplink ports. ",
        "price": "25$",
        "image": "https://th.bing.com/th/id/OIP.eqpAW29wmUySaIFQSWV3mwHaHa?pid=ImgDet&rs=1"
    },
    {
        "id": 10,
        "price": "15$",
        "name": "Netis",
        "Description": "This 8 Port Fast Ethernet Switch provides 8 10/100Mbps Auto-Negotiation RJ45 ports. All ports support Auto MDI/MDIX function, eliminating the need for crossover cables or Uplink ports. ",
        "image": "https://th.bing.com/th/id/OIP.k9Nlte7PUai8RaOyHdlYXwHaHa?w=192&h=192&c=7&r=0&o=5&pid=1.7"
    },
    {
        "id": 11,
        "name": "Cable",
        "Description": "Cat 6 Ethernet Cable High Speed",
        "price": "1m = 6000LBP",
        "image": "https://th.bing.com/th/id/OIP.5T_yv8DZt7ZH947as3ZlwwHaIq?pid=ImgDet&rs=1"
    }
]
    products: any[] = []
    constructor(private things : ProductsSvc, private CartService:CartService ,) { }
  
    ngOnInit(): void {
      this.getproducts()
    }
    
    getproducts(){
      this.things .getproducts().subscribe((data) =>{
        this.products = data
      })
    }
  
    addcart(item:any){
      this.CartService.addcart(item)
    }
  }
  