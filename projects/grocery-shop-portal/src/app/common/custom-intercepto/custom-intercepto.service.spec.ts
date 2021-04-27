import { TestBed } from '@angular/core/testing';

import { CustomInterceptoService } from './custom-intercepto.service';

describe('CustomInterceptoService', () => {
  let service: CustomInterceptoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomInterceptoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
