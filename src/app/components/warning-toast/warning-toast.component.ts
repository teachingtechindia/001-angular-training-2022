import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'at-warning-toast',
  templateUrl: './warning-toast.component.html',
  styleUrls: ['./warning-toast.component.scss'],
})
export class WarningToastComponent implements OnInit {
  msg = '';
  constructor() {}

  ngOnInit(): void {}
}
