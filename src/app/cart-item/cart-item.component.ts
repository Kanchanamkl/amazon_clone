import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Item} from '../dto/Item_';
import { CartService } from '../service/cart.service';
import { ItemService } from '../service/item.service';


@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent  implements OnInit{
   
   @Input()
   item_!:Item; 

  //item_ = new Item("I001","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5PaUFQAXmrhBYZCMKxrLaf0J99TugkmSLtw&s","ZIUMIER Gaming Headset with Microphone", 4 ,34,5);

  @Output()
  cartOnChange = new EventEmitter<number>(); 

  inCart =0;




  constructor(private cartService: CartService , private itemSerivce : ItemService){

  }
  ngOnInit(): void {
   // throw new Error('Method not implemented.');
  }

  updateCart(increment : boolean){
    increment? this.inCart++: this.inCart--;
    this.cartOnChange.emit(this.inCart);

  }

}
