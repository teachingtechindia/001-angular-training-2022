import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'at-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  interval:any = null;

  constructor(private router: Router) {
    console.log('HOME: Constructor');

  }

  ngOnInit(): void {
    console.log('HOME: OnInit');

    this.interval = setInterval(() => {
      console.log('HOME: interval');
    }, 1000);
  }

  ngOnDestroy(): void {
    console.log('HOME: OnDestroy');
    clearInterval(this.interval)
  }
}
