import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodoListService } from 'src/app/services/todo-list.service';
@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.css']
})
export class TodoDetailsComponent implements OnInit {
  todo:any;
  constructor(private ActivatedRoute:ActivatedRoute,private TodoListService:TodoListService) { }

  ngOnInit(): void {
   this.ActivatedRoute.params.subscribe((res)=>{
      this.TodoListService.GetTodo(res['id']).subscribe((data)=>{
         this.todo=data;
      })
   });
  }

}
