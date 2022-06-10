import { TestBed } from '@angular/core/testing';

import { PingPongService } from './ping-pong.service';

describe('PingPongService', () => {
  let service: PingPongService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PingPongService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
