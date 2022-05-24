import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      [
        {
          path: '',
          redirectTo: 'contact',
          pathMatch: 'full',
        },
        {
          path: 'home',
          component: HomeComponent,
        },
        {
          path: 'contact',
          component: ContactComponent,
        },
        {
          path: '**',
          component: PageNotFoundComponent,
          // redirectTo: 'contact',
        },
      ],
      { enableTracing: false }
    ),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
