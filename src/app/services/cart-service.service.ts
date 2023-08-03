import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
@Injectable({
  providedIn: 'root'
})
export class CartServiceService {
  cartContent:any[]=[];
  constructor(private LocalStorageService:LocalStorageService) {
     this.cartContent=this.LocalStorageService.LoadfromLocalStorage("courses");
   }

  addCart(cour:any){
    const index=this.cartContent.findIndex((v)=>v.id==cour.id);
    if(index!=-1){
        this.cartContent[index].quantity+=1;
        this.LocalStorageService.saveToLocalStorage("courses",this.cartContent);
        return;
    }
    cour.quantity=1;
    this.cartContent?.push(cour);
    this.LocalStorageService.saveToLocalStorage("courses",this.cartContent);
  }

  clearLocalStorage(){
    this.LocalStorageService.clearLOcalStorage();
  }

}
