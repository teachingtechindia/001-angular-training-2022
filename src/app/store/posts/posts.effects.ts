import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';
import { PostsService } from 'src/app/services/posts.service';

import * as PostsActions from './posts.actions';
import { PostsEntity } from './posts.models';
import * as PostsFeature from './posts.reducer';

@Injectable()
export class PostsEffects {
  // init$ = createEffect(() => this.actions$.pipe(
  //   ofType(PostsActions.init),
  //   fetch({
  //     run: action => {
  //       // Your custom service 'load' logic goes here. For now just return a success action...
  //       return PostsActions.loadPostsSuccess({ posts: [] });
  //     },
  //     onError: (action, error) => {
  //       console.error('Error', error);
  //       return PostsActions.loadPostsFailure({ error });
  //     }
  //   })
  // ));

  loadPost$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PostsActions.loadPosts),
      switchMap(() =>
        this.postsService.getAllPosts().pipe(
          map((posts: any) => PostsActions.loadPostsSuccess({ posts })),
          catchError(() =>
            of(
              PostsActions.loadPostsFailure({
                error: 'Something went wrong while calling the getALl post api',
              })
            )
          )
        )
      )
    )
  );

  constructor(
    private readonly actions$: Actions,
    private postsService: PostsService
  ) {}
}
