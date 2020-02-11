import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TodoItem } from '../models/todo-item';

const API_URL = `${environment.baseApi}/api/v1/todos`;

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  constructor(private http: HttpClient) {}

  addTodo(item: TodoItem): Observable<void> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post<void>(`${API_URL}`, { title: item.title }, { headers });
  }

  removeTodo(item: TodoItem): Observable<void> {
    return this.http.delete<void>(`${API_URL}/${item.id}`);
  }

  changeTodoState(item: TodoItem): Observable<void> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.put<void>(`${API_URL}/${item.id}`, { state: item.state }, { headers });
  }

  getTodos(): Observable<TodoItem[]> {
    return this.http.get<TodoItem[]>(`${API_URL}`);
  }
}
