import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { TodoListHeaderComponent } from './todo-list-header.component';

describe('TodoListHeaderComponent', () => {
  let component: TodoListHeaderComponent;
  let fixture: ComponentFixture<TodoListHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TodoListHeaderComponent],
      imports: [FormsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit add event if addTodo is called', () => {
    const emitSpy = spyOn(component.add, 'emit');
    component.todoItem.title = 'abc';

    component.addTodo();

    expect(emitSpy).toHaveBeenCalledTimes(1);
    expect(emitSpy.calls.mostRecent().args[0].title).toEqual('abc');
  });

  it('should create new newTodo instance after addTodo was called', () => {
    component.todoItem.title = 'abc';

    component.addTodo();

    expect(component.todoItem.title).toEqual(undefined);
  });
});
