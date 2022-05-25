import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

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
import { ContactsComponent } from './pages/contacts/contacts.component';
import { SigninComponent } from './pages/auth/signin/signin.component';
import { SignupComponent } from './pages/auth/signup/signup.component';

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
    ContactsComponent,
    SigninComponent,
    SignupComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
  exports: [HeaderComponent, FooterComponent, MainContentComponent],
})
export class AppModule {}
