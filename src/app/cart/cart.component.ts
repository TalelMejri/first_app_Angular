import { Component, OnInit } from '@angular/core';
import {LocalStorageService}  from '../services/local-storage.service'
import { CartServiceService } from '../services/cart-service.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartContent:any[]=[];
  prix_total=0;
  Tax_rate=0.2;
  constructor(private LocalStorageService:LocalStorageService,private CartServiceService:CartServiceService) { }

  ngOnInit(): void {
    this.cartContent=this.LocalStorageService.LoadfromLocalStorage("courses");
    this.count_prix();
  }

  count_prix(){
    for(let i=0;i<this.cartContent.length;i++){
      this.prix_total+=this.cartContent[i].quantity*this.cartContent[i].prix;
    }
  }
  clearAll(){
    this.CartServiceService.clearLocalStorage();
    this.cartContent=this.LocalStorageService.LoadfromLocalStorage("courses");
  }
}
