import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

@Component({
  selector: 'at-users-mgmt',
  templateUrl: './users-mgmt.component.html',
  styleUrls: ['./users-mgmt.component.scss'],
})
export class UsersMgmtComponent implements OnInit {
  dataSource: IUser[] = [];
  displayedColumns: string[] = [
    'id',
    'name',
    'username',
    'email',
    'phone',
    'website',
  ];

  constructor(private httpClient: HttpClient) {
    this.httpClient
      .get<IUser[]>('https://jsonplaceholder.typicode.com/users')
      .subscribe((data: IUser[]) => {
        this.dataSource = data;
      });
  }

  ngOnInit(): void {}
}
