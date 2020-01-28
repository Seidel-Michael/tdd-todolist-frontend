import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { TodoItem } from 'src/app/models/todo-item';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.less']
})
export class TodoListComponent implements OnInit {


  @Input()
  todoItems: TodoItem[];

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

  onToggleTodoComplete(todoItem: TodoItem) {
    this.toggleComplete.emit(todoItem);
  }

  onRemoveTodo(todoItem: TodoItem) {
    this.remove.emit(todoItem);
  }

}
