import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import {courses} from '../../courses'
import {LocalStorageService} from "../../services/local-storage.service"
import { CartServiceService } from 'src/app/services/cart-service.service';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})

export class CourseDetailsComponent implements OnInit {
  public course:any;
  cartContent:any[]=[];

  constructor(private CartServiceService:CartServiceService,
              private route:ActivatedRoute,
              private LocalStorageService:LocalStorageService,
              private CourseService:CourseService) { }
  ngOnInit(): void {
    //  this.route.paramMap.subscribe(params=>{
    //   const courseId = params.get('id');
    //   this.course=courses.find((v)=>v.id==Number(courseId));//convert to number
    //  })
    this.route.params.subscribe(params=>{
        //this.course=courses.find((v)=>v.id==params['id']);
          this.CourseService.getById(Number(params['id'])).subscribe((res)=>{
          this.course=res;
        })
    })
    this.cartContent=this.LocalStorageService.LoadfromLocalStorage("courses");
  }

  addCart(cour:any){
      this.CartServiceService.addCart(cour);
  }



}
