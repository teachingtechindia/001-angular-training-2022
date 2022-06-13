import { createReducer, on } from '@ngrx/store';
import * as TodosActions from './todos.action';

export interface TodoModel {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

export const initialState: TodoModel[] = [
  {
    id: 1,
    title: 'To learn Ngrx',
    description:
      'Lerning ngrx will help us to write big and complesx app in easy way',
    completed: false,
  },
];

export const todosReducer = createReducer(
  initialState,

  on(TodosActions.addTodo, (state, payload) => [...state, payload.todo])
);
