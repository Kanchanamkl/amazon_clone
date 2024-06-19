import { Component } from '@angular/core';
import { Item } from './dto/Item_';
import {DUMMY_DATA} from "./dummy-data";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {











  
  // title = 'amazon-clone';
  // items = DUMMY_DATA;

  // cartItems : Array<{code: string , qty: number}>=[];  

  // updateCart(inCart: number, it:Item){

  //   const item =  this.cartItems.find(i =>i.code === it.code) // this method return true or false , if there already exists that object previously.
 

  //   if(item){
  //     item.qty = inCart; // is item already exists then update qty instead of adding it again.

  //     if(item.qty === 0){
  //         //remove that item form cartItems if its qty is 0
  //         this.cartItems.splice(this.cartItems.indexOf(item),1) 
  //     }
      
  //   }else{
  //     this.cartItems.push({code: it.code , qty: inCart}) 
  //   }

    
  //   console.log(this.cartItems)


  // }

  // getTotalItemsInCart(){
  //   let totalItems = 0;
  //   this.cartItems.forEach(item => totalItems += item.qty)
  //   return totalItems; 
  // }
}


//ng g m app-routing --flat    : flat use for keep top level in folder structure