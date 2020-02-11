import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TodoItem } from '../models/todo-item';
import { environment } from 'src/environments/environment';

const API_URL = `${environment.baseApi}/api/v1/todos`;

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  constructor(private http: HttpClient) {}

  public addTodo(item: TodoItem): Observable<void> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post<void>(`${API_URL}`, { title: item.title }, { headers });
  }

  public removeTodo(item: TodoItem): Observable<void> {
    return this.http.delete<void>(`${API_URL}/${item.id}`);
  }

  public changeTodoState(item: TodoItem): Observable<void> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.put<void>(`${API_URL}/${item.id}`, { state: item.state }, { headers });
  }

  public getTodos(): Observable<TodoItem[]> {
    return this.http.get<TodoItem[]>(`${API_URL}`);
  }
}
