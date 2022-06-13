import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { addTodo } from '../../store/todos/todos.action';
// import * as TodosActions from  '../../store/todos/todos.action';

@Component({
  selector: 'at-todo-create',
  templateUrl: './todo-create.component.html',
  styleUrls: ['./todo-create.component.scss'],
})
export class TodoCreateComponent implements OnInit {
  createTodoForm!: FormGroup;
  count = 0;

  constructor(private fb: FormBuilder, private store: Store<any>) {
    this.createTodoForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      completed: [false],
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.createTodoForm.invalid) {
      return;
    }

    this.store.dispatch(
      addTodo({
        todo: {
          id: this.count++,
          title: this.createTodoForm.value.title,
          description: this.createTodoForm.value.description,
          completed: this.createTodoForm.value.completed,
        },
      })
    );
  }
}
