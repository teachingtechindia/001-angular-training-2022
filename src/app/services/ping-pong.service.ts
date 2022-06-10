import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PingPongService {
  msgSubject = new Subject<string>();

  constructor() {}
}
