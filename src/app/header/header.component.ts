import { Component, Inject, Input } from '@angular/core';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  //@Input()
  totalCartItems = 0;

  constructor(private cartService: CartService){
  }  

  ngOnInit():void{

    // setInterval(()=>{
    //   this.udpateCart();
    // } , 1000)

    this.onCartChanged();
     
  }


  onCartChanged(){
    this.cartService.getTotalItemsInCart().subscribe(data => this.totalCartItems = data)
  }


  // udpateCart(){
    
  //    this.totalCartItems = this.cartService.getTotalItemsInCart()
  // }



}
