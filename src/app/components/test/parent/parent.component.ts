import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent implements OnInit {
  inputValue = '';
  @Output() childCryingFromParent = new EventEmitter<string>();

  messgeFromChildComp = '';

  constructor() {}

  ngOnInit(): void {}

  inputChanged(event: any) {
    console.log(event.target.value);
    this.inputValue = event.target.value;
  }

  childCryingEventHandler(event: string) {
    this.messgeFromChildComp = event;
    this.childCryingFromParent.next(event);
  }
}
