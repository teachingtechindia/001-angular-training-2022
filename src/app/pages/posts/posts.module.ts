import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PostsRoutingModule } from './posts-routing.module';
import { PostsComponent } from './posts.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { ListPostComponent } from './list-post/list-post.component';

@NgModule({
  declarations: [
    PostsComponent,
    CreatePostComponent,
    EditPostComponent,
    ListPostComponent,
  ],
  imports: [CommonModule, PostsRoutingModule],
})
export class PostsModule {}
