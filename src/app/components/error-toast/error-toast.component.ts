import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'at-error-toast',
  templateUrl: './error-toast.component.html',
  styleUrls: ['./error-toast.component.scss'],
})
export class ErrorToastComponent implements OnInit {
  msg = 'Error!!';
  constructor() {}

  ngOnInit(): void {}
}
