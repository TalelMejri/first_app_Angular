import { Component, OnInit } from '@angular/core';
import { TodoListService } from '../services/todo-list.service';
import { ActivatedRoute } from '@angular/router';
import { Router} from '@angular/router';
import { State, Store } from '@ngxs/store';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})

export class TodoListComponent implements OnInit {

  constructor(private store:Store,private TodoListService:TodoListService,private router: Router,private ActivatedRoute:ActivatedRoute) { }
  message="";
  AllList:any;
  loading:boolean=true;
  ngOnInit(): void {
    this.afficherTodo();
    this.ActivatedRoute.queryParams.subscribe((params)=>{
      if(params['message']){
        this.message=params['message'];
        setTimeout(()=>
               {this.router.navigate([], { queryParams: {} });
               this.message="";
               this.afficherTodo();
          },3000);
      }
    })
  }

  afficherTodo(){
    this.AllList=[];
    let userId=this.store.selectSnapshot(s=>s.AuthStore?.user).userId;
    this.TodoListService.getTodoList(userId).subscribe((res)=>{
      this.AllList=res;
      this.loading=false;
   })
  }

  ChangeStatu(id: number) {
    this.TodoListService.ChangerStat(id)
      .subscribe((res:any) => {
          this.message=res.message;
          this.afficherTodo();
          setTimeout(() => this.message = "", 3000);
      });
  }

  OpenModal(name:string){
    //console.log(name);
    let modal=document.getElementById(`${name}`);
    //console.log(modal);
    if(modal){
      modal.style.opacity="1";
      modal.style.display="block";
    }
  }

  CloseModal(name:string){
    let modal=document.getElementById(`${name}`);
    if(modal){
      modal.style.opacity="0";
      modal.style.display="none";
    }
  }

  DeleteTodo(id:number){
    this.TodoListService.DeletedTodo(id)
  .subscribe(
    (response: any) => {
      console.log('Response:', response);
    },
    (error: any) => {
      this.CloseModal('exampleModal'+id);
      this.afficherTodo();
      this.message="deleted with success";
      console.log('Error:', error);
    }
  );
  }

}
