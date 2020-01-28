import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListComponent } from './todo-list.component';
import { TodoListItemComponent } from './../todo-list-item/todo-list-item.component';
import { TodoItem } from 'src/app/models/todo-item';
import { FormsModule } from '@angular/forms';

describe('TodoListComponent', () => {
  let component: TodoListComponent;
  let fixture: ComponentFixture<TodoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TodoListComponent, TodoListItemComponent],
      imports: [FormsModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListComponent);
    component = fixture.componentInstance;
    component.todoItems = [];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit remove event if onRemoveTodo is called', () => {
    const emitSpy = spyOn(component.remove, 'emit');
    const item = new TodoItem({});

    component.onRemoveTodo(item);

    expect(emitSpy).toHaveBeenCalledTimes(1);
    expect(emitSpy).toHaveBeenCalledWith(item);
  });

  it('should emit toggleComplete event if onToggleTodoComplete is called', () => {
    const emitSpy = spyOn(component.toggleComplete, 'emit');
    const item = new TodoItem({});

    component.onToggleTodoComplete(item);

    expect(emitSpy).toHaveBeenCalledTimes(1);
    expect(emitSpy).toHaveBeenCalledWith(item);
  });
});
