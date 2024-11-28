import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Student } from '../student';

@Component({
  selector: 'app-students',
  imports: [StudentsComponent],
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
}
