import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactsComponent } from './pages/contacts/contacts.component';

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
          path: 'home',
          component: HomeComponent,
        },
        {
          path: 'contact',
          component: ContactsComponent,
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
