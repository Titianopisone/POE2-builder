import { TestBed } from '@angular/core/testing';

import { GemmesService } from './gemmes.service';

describe('GemmesService', () => {
  let service: GemmesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GemmesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
