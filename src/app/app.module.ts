import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import { FormsModule } from '@angular/forms';
import { ItemComponent } from './item/item.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { AppRoutingModule } from './app-routing.module';


// const routes: Routes=[
//   {path: 'home', 
//   component: HomeComponent

//   },
//   {
//     path: 'item',
//     component: ItemComponent
//   },
//   {
//     path: 'cart',
//     component: CartComponent
//   },
//   {
//     path: '',
//     pathMatch: 'full',
//     redirectTo: '/home'  // very first time load home
    
//   },
//   {
//     path: '**',
//     redirectTo: '/home' // when user click on any other link 
//   }
// ];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CartItemComponent,
    ItemComponent,
    HomeComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
 