import { Component, OnInit } from '@angular/core';
import { ChildMessageService } from 'src/app/services/child-message.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  constructor(public childMessageService: ChildMessageService) {
    setTimeout(() => {
      window.alert(this.childMessageService.messageFromChild);
    }, 5000);
  }

  ngOnInit(): void {}
}
