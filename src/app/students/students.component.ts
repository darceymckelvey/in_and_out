import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Student } from '../student';

@Component({
  selector: 'app-students',
  imports: [],
  templateUrl: './students.component.html',
  styleUrl: './students.component.css'
})
export class StudentsComponent {
  // ! to leave empty
  @Input() parent_student!: Student;
  
  @Output() event_to_send = new EventEmitter();

  addVal(val:string){
    // console.log(val);
    this.event_to_send.emit(val);
  }
  @Input() title_from_parent:string = "";

  // title is not updated
  constructor() {
    console.log('constructor is called');
    console.log('Before ', this.title_from_parent);
    this.title_from_parent = "title is updated";
    console.log('After ', this.title_from_parent);
  }

  // title is updated
  ngOnInit() {
    console.log('ngOnInit is called');
    console.log('Before ', this.title_from_parent);
    this.title_from_parent = "title is updated";
    console.log('After ', this.title_from_parent);
  }
}
