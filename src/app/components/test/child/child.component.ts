import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ChildMessageService } from 'src/app/services/child-message.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent implements OnInit {
  @Input() value = '';
  @Output() childCrying = new EventEmitter<string>();

  constructor(public childMessageService: ChildMessageService) {
    this.childMessageService.messageFromChild =
      'CHILD COMPONENT HAS SET THIS VALUE';
  }

  ngOnInit(): void {}

  btnClickHandler() {
    console.log('ChildComponent: btnClickHandler()');
    this.childCrying.emit('Happy Child!!');
  }
}
