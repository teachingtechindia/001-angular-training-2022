import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent implements OnInit {
  @Input() value = '';
  @Output() childCrying = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  btnClickHandler() {
    console.log('ChildComponent: btnClickHandler()');
    this.childCrying.emit('Child crying...');
  }
}
