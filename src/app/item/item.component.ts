import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DUMMY_DATA } from '../dummy-data';
import { CartService } from '../service/cart.service';
import { ItemService } from '../service/item.service';
import { Item } from '../dto/Item_';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  item!: Item;
  toCart =0; 


  constructor(private cartService : CartService 
    , private itemService : ItemService
    , private activeRoute: ActivatedRoute
    , private router :  Router){
 
  } 


  ngOnInit(): void {
    this.loadItem();
    this.loadInCartQtyByItem();
 
  }

  loadItem(){
    const itemCode = this.activeRoute.snapshot.paramMap.get('code');


    if(itemCode){
      const item_ = this.itemService.getItem(itemCode);
      if(!item_){
        this.router.navigate(['/home'])
      }else{
        this.item = item_;
      }
    }else{
      this.router.navigate(['/home'])
    }
   
  }


  

  
  updateCart(increment : boolean ){
    increment? this.toCart++: this.toCart--;
    //this.cartOnChange.emit(this.inCart);
    this.cartService.updateCart(this.item , this.toCart)
   

  }

  loadInCartQtyByItem(){
    const item_qty = this.cartService.getQtyByItem(this.item.code);
    this.toCart = item_qty;
  }


}
