import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'at-success-toast',
  templateUrl: './success-toast.component.html',
  styleUrls: ['./success-toast.component.scss']
})
export class SuccessToastComponent implements OnInit {
  public msg = 'Successful !!';
  
  constructor() { }

  ngOnInit(): void {
  }

}
