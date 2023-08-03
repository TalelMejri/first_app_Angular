import { Component, OnInit } from '@angular/core';
import {courses} from "../courses";
import { CourseService } from '../services/course.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  // public list_course=courses;
  public list_course:any;
  course:object={
    id:4,
    name:'php updated',
    description:"php php",
    image:'assets/courses/html.png',
    prix:25
  }
  constructor(private CourseService:CourseService) { }

  ngOnInit(): void {
    this.CourseService.getAllcourses().subscribe((res)=>{
      this.list_course=res;
    });

  }

  OnNotify(name:any){
    alert(name +" hello man");
  }
}
