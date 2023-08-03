import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { AuthServiceService } from '../services/auth-service.service';
import { Router } from '@angular/router';
import { LogoutUser } from '../store/actions_auth';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private store:Store,private router:Router,public AuthServiceService:AuthServiceService) {
   }
   isLoged:any;
  ngOnInit(): void {
    /*this.isLoged=this.AuthServiceService.IsLogedTest;
    console.log(this.isLoged);*/
  }

  Logout(){
    this.store.dispatch([
      new LogoutUser()
    ])
    localStorage.removeItem("token");
    this.router.navigate(['']);
  }
}
