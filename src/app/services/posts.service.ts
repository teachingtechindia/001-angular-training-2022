import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { PostsEntity } from '../store/posts/posts.models';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor(private httpClient: HttpClient) {}

  getAllPosts() {
    return this.httpClient
      .get<Observable<PostsEntity[]>>(
        'https://jsonplaceholder.typicode.com/posts'
      )
      .pipe(delay(3000));
  }
}
