import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  public user={
    name:'talel',
    age:'21',
    activeStyle:{
      color:'red',
      fontWeight:'bold'
    }
  };
  public user1={
    name:'hkimi',
    age:'21',
    activeStyle:{
      color:'blue',
      fontWeight:'italic'
    }
  };
  constructor() {

  }

  ngOnInit(): void {
   // Aos.init();
  }

  public SwitchColor(){
    this.user.activeStyle.color=this.user.activeStyle.color=='red' ? 'blue' : 'red';
    this.user1.activeStyle.color=this.user1.activeStyle.color=='blue' ? 'red' : 'blue';
  }
}
