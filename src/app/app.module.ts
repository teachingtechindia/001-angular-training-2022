import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { MainContentComponent } from './components/layout/main-content/main-content.component';
import { ParentComponent } from './components/test/parent/parent.component';
import { ChildComponent } from './components/test/child/child.component';
import { GrandparentComponent } from './components/test/grandparent/grandparent.component';
import { ChildMessageService } from './services/child-message.service';

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
  ],
  imports: [BrowserModule],
  providers: [ChildMessageService],
  bootstrap: [AppComponent],
  exports: [HeaderComponent, FooterComponent, MainContentComponent],
})
export class AppModule {}
