import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import * as PostsActions from './posts.actions';
import { PostsEntity } from './posts.models';

export const POSTS_FEATURE_KEY = 'posts';

export interface State extends EntityState<PostsEntity> {
  selectedId?: string | number; // which Posts record has been selected
  loaded: boolean; // has the Posts list been loaded
  loading: boolean; // is the Posts list currently being loaded
  error?: string | null; // last known error (if any)
}

export interface PostsPartialState {
  readonly [POSTS_FEATURE_KEY]: State;
}

export const postsAdapter: EntityAdapter<PostsEntity> =
  createEntityAdapter<PostsEntity>();

export const initialState: State = postsAdapter.getInitialState({
  // set initial required properties
  loaded: false,
  loading: false,
});

const postsReducer = createReducer(
  initialState,

  on(PostsActions.loadPosts, (state) => ({
    ...state,
    loaded: false,
    error: null,
    loading: true,
  })),

  on(PostsActions.loadPostsSuccess, (state, { posts }) =>
    postsAdapter.setAll(posts, { ...state, loaded: true, loading: false })
  ),

  on(PostsActions.loadPostsFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
    loaded: false,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return postsReducer(state, action);
}
