import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
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

  // @Output()
  // cartOnChange = new EventEmitter<number>(); 

  toCart =0;




  constructor(private cartService: CartService 
               ,private router : Router){

  }
  ngOnInit(): void {
    this.loadInCartQtyByItem()
  }

  updateCart(increment : boolean ){
    increment? this.toCart++: this.toCart--;
    //this.cartOnChange.emit(this.inCart);
    this.cartService.updateCart(this.item_ , this.toCart)
   

  }

  navigateToItem(){

   // this.router.navigateByUrl(`/item/${this.item_.code}`);

   this.router.navigate(['/item',this.item_.code])

  }


  loadInCartQtyByItem(){
    const item_qty = this.cartService.getQtyByItem(this.item_.code);
    this.toCart = item_qty;
  }

}
