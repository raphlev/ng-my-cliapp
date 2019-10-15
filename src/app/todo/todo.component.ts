import { Component, Input } from '@angular/core';
import {TodoModel} from './todo.model';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
        //text: string = "Faire les courses";
        //isChecked: boolean = false;
      //@Input() 
      //text: string;
      //@Input()
      //isChecked: boolean; 
    @Input() 
    todo: TodoModel; 
}