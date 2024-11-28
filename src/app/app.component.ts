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
  title:string = 'in_and_out';
  val_from_child: string = '';

  student:Student = {id: 1, name: "Burgers", age: 27};

  valFromChild(val:string) {
    console.log(val, 'value came from child');
    this.val_from_child = val;
  }

}
