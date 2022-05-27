import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { tap, map, filter } from 'rxjs/operators';
import { ChildMessageService } from './services/child-message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  data: any;

  isLoggedIn = false;
  email = '';

  constructor(
    private childMessageService: ChildMessageService,
    private httpClient: HttpClient,
    private router: Router
  ) {
    console.log('VK: APP COMPONENT : Constructor');
  }

  ngOnInit(): void {
    console.log('VK: APP COMPONENT : ngOnInit');

    this.email = window.localStorage.getItem('email') || '';
    this.isLoggedIn = !!window.localStorage.getItem('token');

    // this.callApi();
  }

  callApi() {
    this.httpClient
      .get('https://jsonplaceholder.typicode.com/todos')
      .subscribe((data) => {
        console.log('VK: APP COMPONENT : callApi : data', data);
        this.data = data;
      });
  }

  onSignout() {
    window.localStorage.removeItem('token');
    window.localStorage.removeItem('id');
    window.localStorage.removeItem('email');
    this.router.navigateByUrl('/signin');
  }

  btnClickHandler() {
    window.alert('Hello World');
  }
}
