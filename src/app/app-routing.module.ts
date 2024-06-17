import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { ItemComponent } from './item/item.component';



const routes: Routes=[
  {path: 'home', 
  component: HomeComponent

  },
  {
    path: 'item',
    component: ItemComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home'  // very first time load home
    
  },
  {
    path: '**',
    redirectTo: '/home' // when user click on any other link 
  }
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],

  exports:[RouterModule]
})
export class AppRoutingModule { }
