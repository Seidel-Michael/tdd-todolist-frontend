import { Component, OnInit } from '@angular/core';
import { TodoService } from './services/todo.service';
import { TodoItem } from './models/todo-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  todoItems: TodoItem[];

  constructor(private todoService: TodoService) {}

  private getTodos() {
    this.todoService.getTodos().subscribe(result => (this.todoItems = result));
  }

  ngOnInit() {
    this.getTodos();
  }

  onAddTodo(todoItem: TodoItem) {
    this.todoService.addTodo(todoItem).subscribe(() => this.getTodos());
  }

  onToggleTodoComplete(todoItem: TodoItem) {
    this.todoService.changeTodoState(todoItem).subscribe(() => this.getTodos());
  }

  onRemoveTodo(todoItem: TodoItem) {
    this.todoService.removeTodo(todoItem).subscribe(() => this.getTodos());
  }
}
