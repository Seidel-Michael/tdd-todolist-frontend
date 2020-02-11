import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { TodoItem } from 'src/app/models/todo-item';
import { TodoListItemComponent } from './../todo-list-item/todo-list-item.component';
import { TodoListComponent } from './todo-list.component';

describe('TodoListComponent', () => {
  let component: TodoListComponent;
  let fixture: ComponentFixture<TodoListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodoListComponent, TodoListItemComponent],
      imports: [FormsModule]
    });

    fixture = TestBed.createComponent(TodoListComponent);
    component = fixture.componentInstance;

    component.todoItems = [];

    fixture.detectChanges();
  });

  describe('general', () => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

  describe('onRemoveTodo', () => {
    it('should emit remove event if onRemoveTodo is called', () => {
      const emitSpy = spyOn(component.remove, 'emit');
      const item = new TodoItem();

      component.onRemoveTodo(item);

      expect(emitSpy).toHaveBeenCalledTimes(1);
      expect(emitSpy).toHaveBeenCalledWith(item);
    });
  });

  describe('onToggleTodoComplete', () => {
    it('should emit toggleComplete event if onToggleTodoComplete is called', () => {
      const emitSpy = spyOn(component.toggleComplete, 'emit');
      const item = new TodoItem();

      component.onToggleTodoComplete(item);

      expect(emitSpy).toHaveBeenCalledTimes(1);
      expect(emitSpy).toHaveBeenCalledWith(item);
    });
  });
});
