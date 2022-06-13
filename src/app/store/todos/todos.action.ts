import { createAction, props } from '@ngrx/store';
import { TodoModel } from './todos.reducer';

export const addTodo = createAction(
  '[Todo] Add Todo',
  props<{ todo: TodoModel }>()
);
