import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.css']
})
export class CourseItemComponent implements OnInit {
   @Input() course:any;
   @Output() test_emit= new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

}
