import { Component, Inject, Input } from '@angular/core';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Input()
  totalCartItems = 0;

  constructor(private cartService: CartService){
  }  

  ngOnInit():void{
     
  }

}
