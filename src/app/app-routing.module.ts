import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserTypeAccessGuard } from './guards/user-type-access.guard';
import { SigninComponent } from './pages/auth/signin/signin.component';
import { SignupComponent } from './pages/auth/signup/signup.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { HomeComponent } from './pages/home/home.component';
import { ListComponent } from './pages/movies/list/list.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      [
        {
          path: '',
          redirectTo: 'home',
          pathMatch: 'full',
        },
        {
          path: 'signin',
          component: SigninComponent,
        },
        {
          path: 'signup',
          component: SignupComponent,
        },
        {
          path: 'home',
          component: HomeComponent,
        },
        {
          path: 'contact',
          component: ContactsComponent,
          canActivate: [UserTypeAccessGuard],
        },
        {
          path: 'posts',
          loadChildren: () =>
            import('./pages/posts/posts.module').then((m) => m.PostsModule),
        },
        {
          path: 'movie-list',
          component: ListComponent,
        },
        {
          path: '**',
          redirectTo: 'home',
        },
      ],
      { enableTracing: false }
    ),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
