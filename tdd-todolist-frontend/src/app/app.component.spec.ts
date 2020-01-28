import { TestBed, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { TodoItem } from './models/todo-item';
import { TodoService } from './services/todo.service';
import { of, } from 'rxjs';
import { TodoListHeaderComponent } from './components/todo-list-header/todo-list-header.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoListItemComponent } from './components/todo-list-item/todo-list-item.component';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';

const EMPTY = of('' as unknown as void);

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent;
  let todoService: TodoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule,
        HttpClientTestingModule
      ],
      declarations: [
        AppComponent,
        TodoListHeaderComponent,
        TodoListComponent,
        TodoListItemComponent
      ]
    });

    fixture = TestBed.createComponent(AppComponent);
    app = fixture.debugElement.componentInstance;

    todoService = TestBed.get(TodoService);

    fixture.detectChanges();
  });


  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  describe('onAddTodo', () => {
    it('should call TodoService.addTodo if called', () => {
      const addSpy = spyOn(todoService, 'addTodo').and.returnValue(EMPTY);
      const item = new TodoItem({});

      app.onAddTodo(item);

      expect(addSpy).toHaveBeenCalledTimes(1);
      expect(addSpy).toHaveBeenCalledWith(item);
    });

    it('should refresh todoItems if called', () => {
      const addSpy = spyOn(todoService, 'addTodo').and.returnValue(EMPTY);
      const item = new TodoItem({});
      const getSpy = spyOn(todoService, 'getTodos').and.returnValue(of([item]));

      app.onAddTodo(item);

      expect(addSpy).toHaveBeenCalledBefore(getSpy);
      expect(app.todoItems).toEqual([item]);
    });
  });

  describe('onToggleTodoComplete', () => {
    it('should call TodoService.addTodo if called', () => {
      const changeSpy = spyOn(todoService, 'changeTodoState').and.returnValue(EMPTY);
      const item = new TodoItem({});

      app.onToggleTodoComplete(item);

      expect(changeSpy).toHaveBeenCalledTimes(1);
      expect(changeSpy).toHaveBeenCalledWith(item);
    });

    it('should refresh todoItems if called', () => {
      const changeSpy = spyOn(todoService, 'changeTodoState').and.returnValue(EMPTY);
      const item = new TodoItem({});
      const getSpy = spyOn(todoService, 'getTodos').and.returnValue(of([item]));

      app.onToggleTodoComplete(item);

      expect(changeSpy).toHaveBeenCalledBefore(getSpy);
      expect(app.todoItems).toEqual([item]);
    });
  });

  describe('onRemoveTodo', () => {
    it('should call TodoService.addTodo if called', () => {
      const removeSpy = spyOn(todoService, 'removeTodo').and.returnValue(EMPTY);
      const item = new TodoItem({});

      app.onRemoveTodo(item);

      expect(removeSpy).toHaveBeenCalledTimes(1);
      expect(removeSpy).toHaveBeenCalledWith(item);
    });

    it('should refresh todoItems if called', () => {
      const removeSpy = spyOn(todoService, 'removeTodo').and.returnValue(EMPTY);
      const item = new TodoItem({});
      const getSpy = spyOn(todoService, 'getTodos').and.returnValue(of([item]));

      app.onRemoveTodo(item);

      expect(removeSpy).toHaveBeenCalledBefore(getSpy);
      expect(app.todoItems).toEqual([item]);
    });
  });
});
