import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ChildMessageService {
  messageFromChild = '';

  constructor() {}
}
