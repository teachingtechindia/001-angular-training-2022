import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DemoDynamicCompComponent } from './components/demo-dynamic-comp/demo-dynamic-comp.component';
import { NgTemplateOutletContextComponent } from './components/ng-template-outlet-context/ng-template-outlet-context.component';
import { RxjsSubjectComponent } from './components/rxjs-subject/rxjs-subject.component';
import { TodoCreateComponent } from './components/todo-create/todo-create.component';
import { TodosComponent } from './components/todos/todos.component';
import { UserRegistrationComponent } from './components/user-registration/user-registration.component';
import { UserSettingsFormsComponent } from './components/user-settings-forms/user-settings-forms.component';
import { UserSettingsReactiveFormComponent } from './components/user-settings-reactive-form/user-settings-reactive-form.component';
import { UsersMgmtComponent } from './components/users-mgmt/users-mgmt.component';
import { Posts2Component } from './components/posts2/posts2.component';
import { ViewContainerRefCompComponent } from './components/view-container-ref-comp/view-container-ref-comp.component';
import { ViewContentQueryComponent } from './components/view-content-query/view-content-query.component';
import { UserTypeAccessGuard } from './guards/user-type-access.guard';
import { SigninComponent } from './pages/auth/signin/signin.component';
import { SignupComponent } from './pages/auth/signup/signup.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { HomeComponent } from './pages/home/home.component';
import { ListComponent } from './pages/movies/list/list.component';
import { ZoneOneComponent } from './zone-one/zone-one.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      [
        {
          path: '',
          redirectTo: 'forms',
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
          path: 'users-mgmt',
          component: UsersMgmtComponent,
        },
        {
          path: 'forms',
          component: UserSettingsFormsComponent,
        },
        {
          path: 'reactive-form',
          component: UserSettingsReactiveFormComponent,
        },
        {
          path: 'dynamic-form',
          component: UserRegistrationComponent,
        },
        { path: 'view-content-query', component: ViewContentQueryComponent },
        {
          path: 'view-container-ref',
          component: ViewContainerRefCompComponent,
        },
        {
          path: 'template-outlet',
          component: NgTemplateOutletContextComponent,
        },
        { path: 'dynamic-component', component: DemoDynamicCompComponent },
        { path: 'rxjs-subject', component: RxjsSubjectComponent },
        { path: 'todos', component: TodosComponent },
        { path: 'todo-create', component: TodoCreateComponent },
        { path: 'posts2', component: Posts2Component },
        { path: 'zonejs-demo', component: ZoneOneComponent },
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
