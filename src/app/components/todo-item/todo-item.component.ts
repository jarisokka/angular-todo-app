import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo!: Todo;
  @Output() onDeleteTodo: EventEmitter<Todo> = new EventEmitter ();
  @Output() onReminder: EventEmitter<Todo> = new EventEmitter ();

  constructor() {}

  ngOnInit(): void {}

  onDelete(todo: Todo) {
    this.onDeleteTodo.emit(todo);
  }

  onToggle(todo: Todo) {
    this.onReminder.emit(todo);
  }

}
