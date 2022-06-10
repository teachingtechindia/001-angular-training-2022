import { Component, OnInit } from '@angular/core';
import { PingPongService } from 'src/app/services/ping-pong.service';

@Component({
  selector: 'at-pong',
  templateUrl: './pong.component.html',
  styleUrls: ['./pong.component.scss'],
})
export class PongComponent implements OnInit {
  constructor(public pingPongService: PingPongService) {}

  ngOnInit(): void {
    this.pingPongService.msgSubject.subscribe((msg) => {
      console.log(msg);
    });
  }
}
