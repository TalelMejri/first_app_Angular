import { Component, OnInit } from '@angular/core';
import  Aos from 'aos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public home_worked:boolean=true;
  public date_current=new Date();
  msg="home no works!";
  testSpineer=false;
  constructor() {
    setTimeout(()=>this.home_worked=false,3000);
  }
  ngOnInit(): void {
    Aos.init()
  }

  public HomeWorked(){
    this.msg="Home Work"
  }

}
