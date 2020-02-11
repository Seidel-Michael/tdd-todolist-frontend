import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListItemComponent } from './todo-list-item.component';
import { TodoItem } from 'src/app/models/todo-item';
import { FormsModule } from '@angular/forms';

describe('TodoListItemComponent', () => {
  let component: TodoListItemComponent;
  let fixture: ComponentFixture<TodoListItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodoListItemComponent],
      imports: [FormsModule]
    });

    fixture = TestBed.createComponent(TodoListItemComponent);
    component = fixture.componentInstance;

    component.todoItem = { id: 'id', state: true, title: 'abc' };

    fixture.detectChanges();
  });

  describe('general', () => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

  describe('removeTodo', () => {
    it('should emit remove event of removeTodo is called', () => {
      const emitSpy = spyOn(component.remove, 'emit');
      const item: TodoItem = { id: 'abc', state: true, title: 'abc' };
      component.todoItem = item;

      component.removeTodo();

      expect(emitSpy).toHaveBeenCalledTimes(1);
      expect(emitSpy).toHaveBeenCalledWith(item);
    });
  });

  describe('toffleTodoComplete', () => {
    it('should emit toggleComplete event of toggleTodoComplete is called', () => {
      const emitSpy = spyOn(component.toggleComplete, 'emit');
      const item: TodoItem = { id: 'abc', state: true, title: 'abc' };
      component.todoItem = item;

      component.toggleTodoComplete();

      expect(emitSpy).toHaveBeenCalledTimes(1);
      expect(emitSpy).toHaveBeenCalledWith(item);
    });
  });
});
