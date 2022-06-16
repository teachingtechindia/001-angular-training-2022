import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PostsFacade } from 'src/app/store/posts/posts.facade';
import { PostsEntity } from 'src/app/store/posts/posts.models';

@Component({
  selector: 'at-posts2',
  templateUrl: './posts2.component.html',
  styleUrls: ['./posts2.component.scss'],
})
export class Posts2Component implements OnInit, OnDestroy {
  posts: PostsEntity[] = [];
  loading = false;
  loaded = false;

  subscriptions = new Subscription();

  constructor(private postsFacade: PostsFacade) {}

  ngOnInit(): void {
    this.postsFacade.loadPosts();

    this.subscriptions.add(
      this.postsFacade.loaded$.subscribe((loaded) => {
        this.loaded = loaded;
      })
    );

    this.subscriptions.add(
      this.postsFacade.allPosts$.subscribe((posts) => {
        this.posts = posts || [];
      })
    );

    this.subscriptions.add(
      this.postsFacade.loading$.subscribe((loading: boolean) => {
        this.loading = loading;
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
