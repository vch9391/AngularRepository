import { Component, OnInit } from '@angular/core';
import { CourseServicesService } from '../course-services.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent {
  title = "List of courses";
  courses;
  colSpan :number = 2;
  isActive : boolean = true ; // test with false
  constructor(service: CourseServicesService){
    this.courses = service.getCourse();
  }
}
