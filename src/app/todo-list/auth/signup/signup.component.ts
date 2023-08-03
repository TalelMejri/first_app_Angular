import { Component, OnInit } from '@angular/core';
import { UserSignup } from 'src/app/model/UserSignup';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TodoListService } from 'src/app/services/todo-list.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private TodoListService:TodoListService,private Router:Router) { }
   loading=false;
   user=new UserSignup();
   hide=true;
   Error:any=[];

  Register(){
      this.loading=true;
      this.TodoListService.SignUp(this.user).subscribe((res)=>{
          this.loading=false;
          this.Router.navigate(['../login'],{queryParams:{message:"User Added With Success"}});
      },
      (error)=>{
         this.loading=false;
         this.Error=error.error.errors ?? error.error;
      })
  }
  ngOnInit(): void {
  }

}
