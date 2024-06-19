import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Item } from '../dto/Item_';

@Injectable({
  providedIn: 'root'  // if use providedIn: 'root' then it will apply for whole application. 
})


export class CartService {

  private cartItems : Array<{code: string , qty: number}>=[];  

  private totalItemSubject = new Subject<number>();

  constructor() { }

   updateCart(it:Item , toCart: number){

    const item =  this.cartItems.find(i =>i.code === it.code) // this method return true or false , if there already exists that object previously.
 

    if(item){
      item.qty = toCart; // is item already exists then update qty instead of adding it again.

      if(item.qty === 0){
          //remove that item form cartItems if its qty is 0
          this.cartItems.splice(this.cartItems.indexOf(item),1) 
      }
      
    }else{
      this.cartItems.push({code: it.code , qty: toCart}) 
    }

    
    console.log(this.cartItems)

    this.calcutalteTotalItems();


  }

  private calcutalteTotalItems(){
      let totalItems = 0;
    this.cartItems.forEach(item => totalItems += item.qty);
    this.totalItemSubject.next(totalItems) 
  }


  getTotalItemsInCart():Subject<number>{

    return this.totalItemSubject;
  
  }

  getQtyByItem(code : string): number{
   const item = this.cartItems.find(it =>it.code === code)
   if(item){
    const item_qty  = item.qty;
    return item_qty; 
   }
    return 0;

  }


  getAllCartItems():Array<{code: string , qty: number}>{
    return this.cartItems;
  }
}
