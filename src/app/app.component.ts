import { Component } from '@angular/core';
import {TodoModel} from './todo/todo.model';

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
                isChecked: false 
             }); 
              this.newTodoText = "";
            }
            else {
                alert('Aucun texte saisi'); 
             }
       } 
      deleteTodo(todo: TodoModel) {
             let index = this.todoList.findIndex(t => {
                 return t == todo;
               }); 
                if (index != -1) {       
        // Supprime le todo situé à l’index donné 
              this.todoList.splice(index, 1);
                }
              else {       
           // la fonction findIndex n’a pas trouvé d’élément  correspondant dans la liste     
           alert("Le todo n’existe pas dans la liste !");
                }
              }
}
