import { TestBed } from '@angular/core/testing';

import { MoviesRestService } from './movies-rest.service';

describe('MoviesRestService', () => {
  let service: MoviesRestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoviesRestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
