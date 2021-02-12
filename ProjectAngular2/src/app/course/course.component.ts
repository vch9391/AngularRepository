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
  constructor(service: CourseServicesService){
    this.courses = service.getCourse();
  }
}
