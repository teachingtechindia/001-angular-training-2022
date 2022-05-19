import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent implements OnInit {
  inputValue = '';

  messgeFromChildComp = '';

  constructor() {}

  ngOnInit(): void {}

  inputChanged(event: any) {
    console.log(event.target.value);
    this.inputValue = event.target.value;
  }

  childCryingEventHandler(event: string) {
    this.messgeFromChildComp = event;
  }
}
