import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { AppComponent } from './app.component';
import { TodoListHeaderComponent } from './components/todo-list-header/todo-list-header.component';
import { TodoListItemComponent } from './components/todo-list-item/todo-list-item.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoItem } from './models/todo-item';
import { TodoService } from './services/todo.service';

const EMPTY = of(('' as unknown) as void);

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent;
  let todoService: TodoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, FormsModule, HttpClientTestingModule],
      declarations: [AppComponent, TodoListHeaderComponent, TodoListComponent, TodoListItemComponent]
    });

    fixture = TestBed.createComponent(AppComponent);
    app = fixture.debugElement.componentInstance;

    todoService = TestBed.get(TodoService);

    fixture.detectChanges();
  });

  describe('general', () => {
    it('should create the app', () => {
      expect(app).toBeTruthy();
    });
  });

  describe('onAddTodo', () => {
    it('should call TodoService.addTodo if called', () => {
      const addSpy = spyOn(todoService, 'addTodo').and.returnValue(EMPTY);
      const item: TodoItem = { id: 'id', state: true, title: 'abc' };

      app.onAddTodo(item);

      expect(addSpy).toHaveBeenCalledTimes(1);
      expect(addSpy).toHaveBeenCalledWith(item);
    });

    it('should refresh todoItems if called', () => {
      const addSpy = spyOn(todoService, 'addTodo').and.returnValue(EMPTY);
      const item: TodoItem = { id: 'id', state: true, title: 'abc' };
      const getSpy = spyOn(todoService, 'getTodos').and.returnValue(of([item]));

      app.onAddTodo(item);

      expect(addSpy).toHaveBeenCalledBefore(getSpy);
      expect(app.todoItems).toEqual([item]);
    });
  });

  describe('onToggleTodoComplete', () => {
    it('should call TodoService.addTodo if called', () => {
      const changeSpy = spyOn(todoService, 'changeTodoState').and.returnValue(EMPTY);
      const item: TodoItem = { id: 'id', state: true, title: 'abc' };

      app.onToggleTodoComplete(item);

      expect(changeSpy).toHaveBeenCalledTimes(1);
      expect(changeSpy).toHaveBeenCalledWith(item);
    });

    it('should refresh todoItems if called', () => {
      const changeSpy = spyOn(todoService, 'changeTodoState').and.returnValue(EMPTY);
      const item: TodoItem = { id: 'id', state: true, title: 'abc' };
      const getSpy = spyOn(todoService, 'getTodos').and.returnValue(of([item]));

      app.onToggleTodoComplete(item);

      expect(changeSpy).toHaveBeenCalledBefore(getSpy);
      expect(app.todoItems).toEqual([item]);
    });
  });

  describe('onRemoveTodo', () => {
    it('should call TodoService.addTodo if called', () => {
      const removeSpy = spyOn(todoService, 'removeTodo').and.returnValue(EMPTY);
      const item: TodoItem = { id: 'id', state: true, title: 'abc' };

      app.onRemoveTodo(item);

      expect(removeSpy).toHaveBeenCalledTimes(1);
      expect(removeSpy).toHaveBeenCalledWith(item);
    });

    it('should refresh todoItems if called', () => {
      const removeSpy = spyOn(todoService, 'removeTodo').and.returnValue(EMPTY);
      const item: TodoItem = { id: 'id', state: true, title: 'abc' };
      const getSpy = spyOn(todoService, 'getTodos').and.returnValue(of([item]));

      app.onRemoveTodo(item);

      expect(removeSpy).toHaveBeenCalledBefore(getSpy);
      expect(app.todoItems).toEqual([item]);
    });
  });
});
