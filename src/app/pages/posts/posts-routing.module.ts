import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePostComponent } from './create-post/create-post.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { ListPostComponent } from './list-post/list-post.component';
import { PostsComponent } from './posts.component';

const routes: Routes = [
  {
    path: '', // http://localhost:4200/posts
    component: PostsComponent,
    children: [
      {
        path: 'list', // http://localhost:4200/posts/list
        component: ListPostComponent,
      },
      {
        path: 'edit', // http://localhost:4200/posts/edit
        component: EditPostComponent,
      },
      {
        path: 'create', // http://localhost:4200/posts/create
        component: CreatePostComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostsRoutingModule {}
