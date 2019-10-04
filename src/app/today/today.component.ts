import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-today',
  template: '<p>Nous sommes le {{today | date}}</p>',
})
export class TodayComponent implements OnInit {
  today = new Date();
  constructor() { }

  ngOnInit() {
  }

}
