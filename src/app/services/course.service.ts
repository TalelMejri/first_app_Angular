import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http:HttpClient) { }

  getAllcourses(){
    return this.http.get(`${environment.apiUrl}`);
  }

  getById(id:number){
    return this.http.get(`${environment.apiUrl}`+id);
  }

  createNewCourse(data:object){
    return this.http.post(`${environment.apiUrl}`, data)
  }

  updateCourses(id:number,data:object){
    return this.http.put(`${environment.apiUrl}`+id, data);
  }

  DeleteCourse(id:number){
    return this.http.delete(`${environment.apiUrl}`+id);
  }
}
