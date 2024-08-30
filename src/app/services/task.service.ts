import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Task } from '../Tasks';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private apiUrl = 'http://localhost:5000/tasks';
  constructor(private htttp: HttpClient) {}

  getTasks(): Observable<Task[]> {
    return this.htttp.get<Task[]>(this.apiUrl);
  }
  deleteTask(task: Task): Observable<Task> {
    const url = `${this.apiUrl}/${task.id}`;
    return this.htttp.delete<Task>(url);
  }
  updateTaskReminder(task: Task): Observable<Task> {
    const url = `${this.apiUrl}/${task.id}`;
    return this.htttp.put<Task>(url, task, httpOptions);
  }
  addTask(task: Task): Observable<Task> {
    return this.htttp.post<Task>(this.apiUrl, task, httpOptions);
  }
}
