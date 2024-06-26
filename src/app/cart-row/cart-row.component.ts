import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Item } from '../dto/Item_';
import { DUMMY_DATA } from '../dummy-data';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-cart-row',
  templateUrl: './cart-row.component.html',
  styleUrls: ['./cart-row.component.scss']
})
export class CartRowComponent implements OnInit {




  @Input()
  item !: Item ;

  @Input()
  qty !: number;

  @Output()
  onReomve = new EventEmitter<void>();

  constructor(private cartService: CartService) {

  }
  ngOnInit(): void {


  }

  removeFromCart() {
  this.cartService.removeItemFromCart(this.item.itemCode);
  this.onReomve.emit(); 

 }

}
