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
  onSave($event){
    $event.stopPropagation();
    console.log("Button was clicked!",$event);
  }
  onDivClicked(){
    console.log("DIV was clicked!");
  }
  textname="Intial Text";
  onKeyUp(){
    console.log("Enter was pressed! " + this.textname );
  }
  course={
    title:"The Angular",
    rating:4.9732,
    students:3052,
    price: 190.95,
    relesedDatw: new Date(2016,3,1)
  };
}
