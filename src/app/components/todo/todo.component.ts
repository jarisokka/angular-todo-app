import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { Todo } from 'src/app/Todo';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [];

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todoService.getTodo().subscribe((todos) => this.todos = todos);
  }

  deleteTodo(todo: Todo) {
    this.todoService.deleteTodo(todo).subscribe(() => this.todos = this.todos.filter((t) => t.id !== todo.id ));
  }

  toggleReminder(todo: Todo) {
    todo.reminder = !todo.reminder;
    this.todoService.updateReminder(todo).subscribe();
  }

  addTodo(todo: Todo) {
    this.todoService.addTodo(todo).subscribe((todo) => this.todos.push(todo));
  }
}
