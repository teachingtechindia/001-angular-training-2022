import { createFeatureSelector, createSelector } from '@ngrx/store';
import { POSTS_FEATURE_KEY, State, postsAdapter } from './posts.reducer';

// Lookup the 'Posts' feature state managed by NgRx
// Select * from sometable
export const getPostsState = createFeatureSelector<State>(POSTS_FEATURE_KEY);

const { selectAll, selectEntities } = postsAdapter.getSelectors();

export const getPostsLoaded = createSelector(
  getPostsState,
  (state: State) => state.loaded
);

export const getPostsError = createSelector(
  getPostsState,
  (state: State) => state.error
);

export const loading = createSelector(
  getPostsState,
  (state: State) => state.loading
);

export const getAllPosts = createSelector(getPostsState, (state: State) =>
  selectAll(state)
);

export const getPostsEntities = createSelector(getPostsState, (state: State) =>
  selectEntities(state)
);

export const getSelectedId = createSelector(
  getPostsState,
  (state: State) => state.selectedId
);

export const getSelected = createSelector(
  getPostsEntities,
  getSelectedId,
  (entities, selectedId) => (selectedId ? entities[selectedId] : undefined)
);
