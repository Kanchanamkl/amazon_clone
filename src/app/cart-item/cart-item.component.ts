import { Component, OnInit } from '@angular/core';
import { Item} from '../dto/Item_';


@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent  implements OnInit{


  item_ = new Item("I001","https://m.media-amazon.com/images/I/71nh1VxLzuL._AC_UY218_.jpg","ZIUMIER Gaming Headset with Microphone, Compatible with PS4 PS5 Xbox One PC Laptop, Over-Ear Headphones with LED RGB Light, Noise Canceling Mic, 7.1 Stereo Surround Sound", 4 ,34,5);


  constructor(){

  }
  ngOnInit(): void {
   // throw new Error('Method not implemented.');
  }

}
