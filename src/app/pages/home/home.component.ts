import { Component, OnInit } from '@angular/core';
import { UserlistService } from 'src/app/services/userlist.service';

@Component({
  selector: 'at-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  userlist = [{ name: 'vivek' }];

  constructor(public userlistService: UserlistService) {}

  ngOnInit(): void {
    this.userlistService.usersSubject.subscribe((userlist) => {
      this.userlist = userlist;
    });
  }
}
