import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from '../dto/Item_';
import { CartService } from '../service/cart.service';
import { ItemService } from '../service/item.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit{

  total : number =0;

  cartItems! : Array<{code : string , qty: number}>;

    constructor(private cartService : CartService 
      , public itemSerivce: ItemService
      , private router : Router  ){
    }


  ngOnInit(): void {
    this.loadAllCartItems( );
    this.getNetTotal();
  }


  loadAllCartItems(){
      this.getNetTotal();
      this.cartItems = this.cartService.getAllCartItems();
  }
 
  getItem(code : string ): Item{

    const cartItem = this.itemSerivce.getItem(code);
    return  cartItem as Item;
  }

  navigateToItem(code : string){
    // this.router.navigateByUrl(`/item/${code}`);
    this.router.navigate(['/item',code]) 

  }

  getNetTotal(): void{
      this.total = this.cartService.getNetTotal();
  }

}
