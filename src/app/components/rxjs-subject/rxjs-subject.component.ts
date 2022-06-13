import { Component, OnInit } from '@angular/core';
import { UserlistService } from 'src/app/services/userlist.service';

@Component({
  selector: 'at-rxjs-subject',
  templateUrl: './rxjs-subject.component.html',
  styleUrls: ['./rxjs-subject.component.scss'],
})
export class RxjsSubjectComponent implements OnInit {
  constructor(public userlistService: UserlistService) {}

  ngOnInit(): void {}
}
