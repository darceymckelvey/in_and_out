import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StudentsComponent } from './students/students.component';
import { Student } from './student';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, StudentsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'in_and_out';

  student:Student = {id: 1, name: "Burgers", age: 27};

  valFromChild(val:string) {
    console.log(val, 'from parent');
  }

}
