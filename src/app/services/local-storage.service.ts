import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  saveToLocalStorage(name:string,cartContent:any[]){
    localStorage.setItem(name,JSON.stringify(cartContent));
  }

  LoadfromLocalStorage(name:string){
    const storedCourses = localStorage.getItem(name);
     return storedCourses !== null ? JSON.parse(storedCourses) : [];
  }
  clearLOcalStorage(){
    localStorage.clear();
  }
}
