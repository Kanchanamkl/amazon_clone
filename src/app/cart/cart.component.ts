import { Component, OnInit } from '@angular/core';
import { Item } from '../dto/Item_';
import { CartService } from '../service/cart.service';
import { ItemService } from '../service/item.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit{

  cartItems! : Array<{code : string , qty: number}>;

    constructor(private cartService : CartService , public itemSerivce: ItemService ){
    }


  ngOnInit(): void {
    this.loadAllCartItems( );
  }


  loadAllCartItems(){
      this.cartItems = this.cartService.getAllCartItems();
  }
 
  getItem(code : string ): Item{

    const cartItem = this.itemSerivce.getItem(code);
    return  cartItem as Item;
  }

}
