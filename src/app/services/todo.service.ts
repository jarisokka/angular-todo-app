import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import { Todo } from '../Todo';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  }),
};

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private apiUrl = "http://localhost:5000/todos"

  constructor(private http:HttpClient) { }

  getTodo(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.apiUrl)
  }

  deleteTodo(todo: Todo): Observable<Todo> {
    const url = `${this.apiUrl}/${todo.id}`;
    return this.http.delete<Todo>(url);
  }

  updateReminder(todo: Todo): Observable<Todo> {
    const url = `${this.apiUrl}/${todo.id}`;
    return this.http.put<Todo>(url, todo, httpOptions);
  }

  addTodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(this.apiUrl, todo, httpOptions);
  }
}
