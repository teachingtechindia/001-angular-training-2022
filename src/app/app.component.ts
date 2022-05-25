import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, map, filter } from 'rxjs/operators';
import { ChildMessageService } from './services/child-message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private childMessageService: ChildMessageService,
    private httpClient: HttpClient
  ) {
    console.log('VK: APP COMPONENT : Constructor');
  }

  ngOnInit(): void {
    console.log('VK: APP COMPONENT : ngOnInit');

    this.callApi();
  }

  callApi() {
    this.httpClient
      .get('https://jsonplaceholder.typicode.com/todos')
      .subscribe((data) => {
        console.log('VK: APP COMPONENT : callApi : data', data);
      });
  }
}
