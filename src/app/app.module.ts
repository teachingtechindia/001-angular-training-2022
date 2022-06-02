import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

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
import { AuthService } from './services/auth.service';
import { ListComponent } from './pages/movies/list/list.component';
import { AuthTokenReqHeaderInterceptor } from './services/auth-token-interceptor.service';
import { ButtonComponent } from './components/button/button.component';
import { ButtonDirective } from './directives/button.directive';
import { CustomNgIfDirective } from './directives/custom-ng-if.directive';
import { AgePipe } from './pipes/age.pipe';
import { MarksPipe } from './pipes/marks.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MyDialogComponent } from './components/my-dialog/my-dialog.component';
import { MatTableModule } from '@angular/material/table';
import { UsersMgmtComponent } from './components/users-mgmt/users-mgmt.component';

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
    ListComponent,
    ButtonComponent,
    ButtonDirective,
    CustomNgIfDirective,
    AgePipe,
    MarksPipe,
    MyDialogComponent,
    UsersMgmtComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatDialogModule,
    MatTableModule,
  ],
  providers: [
    AuthService,
    // {
    //   provide: AuthService,
    //   useClass: AuthService,
    //   multi: false,
    // },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthTokenReqHeaderInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
  exports: [HeaderComponent, FooterComponent, MainContentComponent, MarksPipe],
})
export class AppModule {}
