import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  Test:number=10;
  class_type:String="p-5";
  getTest(){
    return this.Test;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
