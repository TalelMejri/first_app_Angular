import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Todo } from '../model/Todo';
import { UserSignup } from '../model/UserSignup';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  constructor(private http:HttpClient) { }

  getTodoList(id:number){
    return this.http.get(`${environment.apiDotnet}/App/AllTodos?idUser=`+id);
  }

  ChangerStat(id:number){
    return this.http.put(`${environment.apiDotnet}/App/changerStat?id=`+id,null);
  }

  DeletedTodo(id:number){
    return this.http.delete(`${environment.apiDotnet}/App/`+id);
  }

  GetTodo(id:number){
    return this.http.get(`${environment.apiDotnet}/App/`+id);
  }

  AddTodoServ(Todo:Todo,id:number){
    return this.http.post(`${environment.apiDotnet}/App/`+id,Todo);
  }

  UpdatedTodo(id:number,Todo:Todo){
    return this.http.put(`${environment.apiDotnet}/App/`+id,Todo);
  }

  SignUp(User:UserSignup){
    return this.http.post(`${environment.apiDotnet}/Auth/signUp`,User);
  }

  login(User:any){
    return this.http.post(`${environment.apiDotnet}/Auth/authUser`,User);
  }
}
