import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserlistService {
  usersSubject = new BehaviorSubject<any>([]);

  constructor(private httpClient: HttpClient) {
    this.loadUserList();
  }

  loadUserList() {
    this.httpClient
      .get('https://jsonplaceholder.typicode.com/users')
      .subscribe((data: any) => {
        this.usersSubject.next(data);
      });
  }

  addUser(user: any) {}

  deleteUser(user: any) {}

  updateUser(user: any) {}

  getUsers() {}

  getUser(id: any) {}
}
