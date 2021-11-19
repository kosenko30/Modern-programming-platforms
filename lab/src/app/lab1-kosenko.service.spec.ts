import { TestBed } from '@angular/core/testing';

import { Lab1KosenkoService } from './lab1-kosenko.service';

describe('Lab1KosenkoService', () => {
  let service: Lab1KosenkoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Lab1KosenkoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
