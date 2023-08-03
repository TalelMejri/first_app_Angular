import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/model/Todo';
import {FormsModule} from '@angular/forms'
import { TodoListService } from 'src/app/services/todo-list.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngxs/store';

ActivatedRoute
@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  todo=new Todo();
  Title="Add Todo";
  constructor(private store:Store,private TodoListService:TodoListService,private router:Router,private ActivatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.ActivatedRoute.params.subscribe((res)=>{
      if(res['id']!='null'){
             this.TodoListService.GetTodo(res['id']).subscribe((data:any)=>{
                 this.Title="Updated Todo";
                 this.todo.title=data.title;
                 this.todo.duedate=data.dueDate;
                 this.todo.description=data.description;
           })
          }
      })
  }

  AddTodo(){
   this.ActivatedRoute.params.subscribe((res)=>{
    let userId=this.store.selectSnapshot(s=>s.AuthStore?.user).userId;
          if(res['id']!='null'){
              this.TodoListService.UpdatedTodo(res['id'],this.todo).subscribe(()=>{
              })
              this.router.navigate(['/Todo'],{queryParams:{message:"Todo Updated"}});
          }else{
            this.TodoListService.AddTodoServ(this.todo,userId).subscribe(()=>{
            })
            this.router.navigate(['/Todo'],{queryParams:{message:"Todo Added"}});
          }
        })

  }



}
