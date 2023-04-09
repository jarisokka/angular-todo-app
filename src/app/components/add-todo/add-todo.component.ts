import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/Todo';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit{
  @Output() onAddTodo: EventEmitter<Todo> = new EventEmitter(); 
  text!: string;
  day!: string;
  reminder: boolean = false;
  showAddTodo!: boolean;
  subscription!: Subscription;
  
  constructor(private uiService: UiService) {
    this.subscription = this.uiService.onToggle().subscribe(value => this.showAddTodo = value)
  }

  ngOnInit(): void {}

  onSubmit() {
    if(!this.text) {
      alert("Please add a todo!");
      return;
    }

    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder
    }

    this.onAddTodo.emit(newTask);

    this.text = "";
    this.day = "";
    this.reminder = false;
  }
}
