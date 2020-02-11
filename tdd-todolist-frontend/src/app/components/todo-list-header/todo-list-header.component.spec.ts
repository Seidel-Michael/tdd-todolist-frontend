import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { TodoListHeaderComponent } from './todo-list-header.component';

describe('TodoListHeaderComponent', () => {
  let component: TodoListHeaderComponent;
  let fixture: ComponentFixture<TodoListHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodoListHeaderComponent],
      imports: [FormsModule]
    });

    fixture = TestBed.createComponent(TodoListHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('general', () => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

  describe('addTodo', () => {
    it('should emit add event if addTodo is called', () => {
      const emitSpy = spyOn(component.add, 'emit');
      component.title = 'abc';

      component.addTodo();

      expect(emitSpy).toHaveBeenCalledTimes(1);
      expect(emitSpy.calls.mostRecent().args[0].title).toEqual('abc');
    });

    it('should create new newTodo instance after addTodo was called', () => {
      component.title = 'abc';

      component.addTodo();

      expect(component.title).toEqual('');
    });
  });
});
