import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromMovies from './movies.reducer';

export const selectMoviesState = createFeatureSelector<fromMovies.MovieState>(
  fromMovies.moviesFeatureKey
);
