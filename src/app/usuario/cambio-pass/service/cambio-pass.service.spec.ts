import { TestBed } from '@angular/core/testing';

import { CambioPassService } from './cambio-pass.service';

describe('CambioPassService', () => {
  let service: CambioPassService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CambioPassService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
