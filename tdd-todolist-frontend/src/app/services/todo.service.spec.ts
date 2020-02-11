import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController, TestRequest } from '@angular/common/http/testing';

import { TodoService } from './todo.service';
import { TodoItem } from '../models/todo-item';
import { environment } from 'src/environments/environment';

describe('TodoServiceService', () => {
  let http: HttpTestingController;
  const API_URL = `${environment.baseApi}/api/v1/todos`;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule] });

    http = getTestBed().get(HttpTestingController);
  });

  describe('general', () => {
    it('should be created', () => {
      const service: TodoService = TestBed.get(TodoService);
      expect(service).toBeTruthy();
    });
  });

  describe('addTodo', () => {
    const url = `${API_URL}`;

    it('should call api endpoint correctly', done => {
      const service: TodoService = TestBed.get(TodoService);
      const item = new TodoItem('abc');
      service.addTodo(item).subscribe(() => {
        expect().nothing();
        done();
      });

      const req: TestRequest = http.expectOne(url);
      expect(req.request.method).toBe('POST');
      expect(req.request.headers.get('Content-Type')).toBe('application/json');
      req.flush('', { status: 204, statusText: '204' });
      http.verify();
    });

    it('should set correct body', done => {
      const service: TodoService = TestBed.get(TodoService);
      const item = new TodoItem('abc');
      service.addTodo(item).subscribe(() => {
        expect().nothing();
        done();
      });

      const req: TestRequest = http.expectOne(url);
      expect(req.request.body).toEqual({ title: 'abc' });
      req.flush('', { status: 204, statusText: '204' });
      http.verify();
    });
  });

  describe('removeTodo', () => {
    const url = `${API_URL}/id`;

    it('should call api endpoint correctly', done => {
      const service: TodoService = TestBed.get(TodoService);
      const item = new TodoItem('abc', 'id', true);
      service.removeTodo(item).subscribe(() => {
        expect().nothing();
        done();
      });

      const req: TestRequest = http.expectOne(url);
      expect(req.request.method).toBe('DELETE');
      req.flush('', { status: 204, statusText: '204' });
      http.verify();
    });
  });

  describe('changeTodoState', () => {
    const url = `${API_URL}/id`;

    it('should call api endpoint correctly', done => {
      const service: TodoService = TestBed.get(TodoService);
      const item = new TodoItem('abc', 'id', true);
      service.changeTodoState(item).subscribe(() => {
        expect().nothing();
        done();
      });

      const req: TestRequest = http.expectOne(url);
      expect(req.request.method).toBe('PUT');
      expect(req.request.headers.get('Content-Type')).toBe('application/json');
      req.flush('', { status: 204, statusText: '204' });
      http.verify();
    });

    it('should set correct body', done => {
      const service: TodoService = TestBed.get(TodoService);
      const item = new TodoItem('abc', 'id', true);
      service.changeTodoState(item).subscribe(() => {
        expect().nothing();
        done();
      });

      const req: TestRequest = http.expectOne(url);
      expect(req.request.body).toEqual({ state: true });
      req.flush('', { status: 204, statusText: '204' });
      http.verify();
    });
  });

  describe('getTodo', () => {
    const url = `${API_URL}`;
    const response = [
      {
        id: '1',
        title: 'Test 1',
        state: true
      },
      {
        id: '2',
        title: 'Test 2',
        state: false
      },
      {
        id: '3',
        title: 'Test 4',
        state: true
      },
      {
        id: '4',
        title: 'Test 5',
        state: true
      }
    ];

    it('should call api endpoint correctly', done => {
      const service: TodoService = TestBed.get(TodoService);
      service.getTodos().subscribe(() => {
        expect().nothing();
        done();
      });

      const req: TestRequest = http.expectOne(url);
      expect(req.request.method).toBe('GET');
      req.flush(response);
      http.verify();
    });

    it('should resolve with response', done => {
      const service: TodoService = TestBed.get(TodoService);
      service.getTodos().subscribe(res => {
        expect(res).toEqual(response);
        done();
      });

      const req: TestRequest = http.expectOne(url);
      req.flush(response);
      http.verify();
    });
  });
});
