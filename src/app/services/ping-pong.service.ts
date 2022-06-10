import { Injectable } from '@angular/core';
import { interval, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PingPongService {
  msgSubject = new Subject<string>();

  constructor() {
    // let i = 1;
    // const o1$ = Observable.create((observer: any) => {
    //   setInterval(() => {
    //     observer.next(new Date());
    //     i++;
    //   }, 2000 + i * 100);
    // });
    // o1$.subscribe((x: any) => {
    //   console.log('o1$ -- 1 --', x);
    // });
    // setTimeout(() => {
    //   o1$.subscribe((x: any) => {
    //     console.log('o1$ -- 2 --', x);
    //   });
    // }, 3000);
  }
}
