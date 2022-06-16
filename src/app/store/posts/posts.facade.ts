import { Injectable } from '@angular/core';
import { select, Store, Action } from '@ngrx/store';

import * as PostsActions from './posts.actions';
import * as PostsFeature from './posts.reducer';
import * as PostsSelectors from './posts.selectors';

@Injectable()
export class PostsFacade {
  loaded$ = this.store.pipe(select(PostsSelectors.getPostsLoaded));
  allPosts$ = this.store.pipe(select(PostsSelectors.getAllPosts));
  selectedPosts$ = this.store.pipe(select(PostsSelectors.getSelected));
  loading$ = this.store.pipe(select(PostsSelectors.loading));

  constructor(private readonly store: Store) {}

  loadPosts() {
    this.store.dispatch(PostsActions.loadPosts());
  }
}
