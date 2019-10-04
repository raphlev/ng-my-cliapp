import { Component } from '@angular/core';

@Component({
  selector: 'app-todolist',
  template:
  `<h1>{{listTitle}}</h1>
    <div [hidden]='todos.length'>Aucun élément</div>
    <ul>
      <li *ngFor='let todo of todos; let i =
index; let odd = odd' [ngStyle]='{
          "background-color": !!odd ? "gray" : "",
          "font-style": "italic"
        }'>
      <hr *ngIf='i'/>
        <a [href]='"http://google.fr/#q=" + todo'
target='_blank'>{{todo}}</a>
      </li>
    </ul>
    <form (submit)='createTodo()'>
      <input type='text' name='todoLabel' [(ngModel)]='newTodo' />
    </form>`,
})
export class TodolistComponent {
  listTitle = 'Ma Todo List';
  todos: string[] = [];
  newTodo = '';

  createTodo() {
    if (this.newTodo) {
      this.todos.push(this.newTodo);
      this.newTodo = '';
    }
  }
}
