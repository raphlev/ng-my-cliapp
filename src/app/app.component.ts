import { Component } from '@angular/core';
import {TodoModel} from './todo/todomodel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NG-MyCLIApp';
  //todoChecked: boolean = true;
  //todoName: string = "Faire les courses";
   newTodoText: string;
   todoList: TodoModel[] = [];
   addTodo() {
         if (this.newTodoText) {
             this.todoList.push({ 
               text: this.newTodoText, 
                isChecked: false      }); 
              this.newTodoText = "";
            }
            else {
                alert('Aucun texte saisi'); 
             }
       } 
}
