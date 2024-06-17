import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Input()
  totalCartItems = 0;

  constructor(){
  }

  ngOnInit():void{
     
  }

}
