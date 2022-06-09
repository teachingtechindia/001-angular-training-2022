import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'at-ng-template-outlet-context',
  templateUrl: './ng-template-outlet-context.component.html',
  styleUrls: ['./ng-template-outlet-context.component.scss'],
})
export class NgTemplateOutletContextComponent implements OnInit {
  val = 1;

  constructor() {
    setInterval(() => (this.val = this.val === 1 ? 2 : 1), 5000);
  }

  ngOnInit(): void {}

  getDynamicContext(v: any) {
    if (this.val === 1) {
      return {
        message: 'Message is dependent on val : 1',
        name: 'Shreemita',
      };
    } else {
      return {
        message: 'Message is dependent on val : 2',
        name: 'Vivek',
      };
    }
  }
}
