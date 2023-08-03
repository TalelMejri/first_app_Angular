import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators,FormControl,ReactiveFormsModule  } from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';
import { TodoListService } from 'src/app/services/todo-list.service';
import { Store } from '@ngxs/store';
import { SetIsAuth,LogoutUser,SetUser,SetToken } from 'src/app/store/actions_auth';
import { UserWithFields } from 'src/app/model/UserWithFields';
import { AuthServiceService } from 'src/app/services/auth-service.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private AuthServiceService:AuthServiceService,private store:Store,private formBuilder:FormBuilder, private ActivatedRoute:ActivatedRoute,private router:Router,private TodoListService:TodoListService) {
    this.loginForm=this.formBuilder.group({
        email:this.emailRegister,
        password:this.passwordRegister
    });
   }
   emailRegister = new FormControl('', [Validators.required,
    Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,10}$'),
    ],);

    passwordRegister = new FormControl('', [Validators.required])


      getErrorEmail(){
        if(this.emailRegister.touched){
          if(this.emailRegister.hasError("required")){
            return 'You must enter a value';
          }else{
            return 'Not A Valid Email';
          }
        }
        return '';
      }

      getErrorPassword(){
        if(this.passwordRegister.touched){
          if(this.passwordRegister.hasError("required")){
            return 'You must enter a value';
          }  //return 'Password must contain at least one uppercase letter, one lowercase letter and one number';
          }
          return '';
        }

  message='';
  loginForm:FormGroup;
  email="";
  password="";
  ngOnInit(): void {
    this.ActivatedRoute.queryParams.subscribe((res:any)=>{
      if(res['message']){
        this.message=res['message'];
        setTimeout(()=>{this.router.navigate([],{queryParams:{}});this.message=''},3000);
      }
    })
  }

  user: UserWithFields = new UserWithFields();
  LoginUser(){
    if(this.loginForm.valid){
      this.AuthServiceService.login(this.loginForm.value).subscribe((res:any)=>{
        this.user=res;
        this.store.dispatch([
          new SetIsAuth(true),
          new SetToken(res.token),
          new SetUser(res.userDeatails)
        ])
        this.router.navigate(['Todo'])
    },
    (error)=>{
        console.log(error);
    })
    }else{
      this.emailRegister.markAsTouched();
      this.passwordRegister.markAsTouched();
    }

  }

}
