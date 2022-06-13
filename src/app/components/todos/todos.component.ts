import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { TodoModel } from 'src/app/store/todos/todos.reducer';

@Component({
  selector: 'at-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  public todos: TodoModel[] = [];
  constructor(private store: Store<any>) {}

  ngOnInit(): void {
    this.store.select('todos').subscribe((todos) => {
      console.log('todos', todos);
      this.todos = todos;
    });
  }
}
