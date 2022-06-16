import { Action, createReducer, on } from '@ngrx/store';
import * as MoviesActions from './movies.actions';

export const moviesFeatureKey = 'movies';

export interface MovieState {

}

export const initialState: MovieState = {

};

export const reducer = createReducer(
  initialState,

  on(MoviesActions.loadMoviess, state => state),

);
