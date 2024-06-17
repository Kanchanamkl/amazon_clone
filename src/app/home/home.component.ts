import { Component } from '@angular/core';
import { Item } from '../dto/Item_';
import { DUMMY_DATA } from '../dummy-data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  items = DUMMY_DATA;

  cartItems : Array<{code: string , qty: number}>=[];  

  updateCart(inCart: number, it:Item){

    const item =  this.cartItems.find(i =>i.code === it.code) // this method return true or false , if there already exists that object previously.
 

    if(item){
      item.qty = inCart; // is item already exists then update qty instead of adding it again.

      if(item.qty === 0){
          //remove that item form cartItems if its qty is 0
          this.cartItems.splice(this.cartItems.indexOf(item),1) 
      }
      
    }else{
      this.cartItems.push({code: it.code , qty: inCart}) 
    }

    
    console.log(this.cartItems)

  }
}
