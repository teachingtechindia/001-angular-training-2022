import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { LayoutComponent } from './components/layout/layout.component';
import { MainContentComponent } from './components/layout/main-content/main-content.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ChildComponent } from './components/test/child/child.component';
import { GrandparentComponent } from './components/test/grandparent/grandparent.component';
import { ParentComponent } from './components/test/parent/parent.component';

const ROUTES: Routes = [
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
];

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    MainContentComponent,
    ParentComponent,
    ChildComponent,
    GrandparentComponent,
    HomeComponent,
    ContactComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES, { enableTracing: false }),
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [HeaderComponent, FooterComponent, MainContentComponent],
})
export class AppModule {}
