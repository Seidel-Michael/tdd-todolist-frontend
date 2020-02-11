import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TodoItem } from 'src/app/models/todo-item';

@Component({
  selector: 'app-todo-list-header',
  templateUrl: './todo-list-header.component.html',
  styleUrls: ['./todo-list-header.component.less']
})
export class TodoListHeaderComponent implements OnInit {
  title = '';

  @Output()
  add: EventEmitter<TodoItem>;

  constructor() {
    this.add = new EventEmitter();
  }

  ngOnInit() {}

  addTodo() {
    this.add.emit({ title: this.title, state: false });
    this.title = '';
  }
}
