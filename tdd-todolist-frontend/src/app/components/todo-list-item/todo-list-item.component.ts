import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TodoItem } from 'src/app/models/todo-item';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.less']
})
export class TodoListItemComponent implements OnInit {

  @Input() todoItem: TodoItem;

  @Output()
  remove: EventEmitter<TodoItem>;

  @Output()
  toggleComplete: EventEmitter<TodoItem>;

  constructor() {
    this.remove = new EventEmitter();
    this.toggleComplete = new EventEmitter();
  }

  ngOnInit() {
  }

  toggleTodoComplete() {
    this.toggleComplete.emit(this.todoItem);
  }

  removeTodo() {
    this.remove.emit(this.todoItem);
  }

}
