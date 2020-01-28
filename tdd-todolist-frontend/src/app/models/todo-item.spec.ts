import { TodoItem } from './todo-item';

describe('TodoItem', () => {
  it('should create an instance', () => {
    expect(new TodoItem()).toBeTruthy();
  });

  it('should set values in constructor', () => {
    const todo = new TodoItem({
      id: 'abc',
      title: 'hello',
      state: true
    });
    expect(todo.id).toEqual('abc');
    expect(todo.title).toEqual('hello');
    expect(todo.state).toEqual(true);
  });
});
