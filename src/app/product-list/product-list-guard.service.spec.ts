import { TestBed, inject } from '@angular/core/testing';

import { ProductListGuardService } from './product-list-guard.service';

describe('ProductListGuard.ServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductListGuardService]
    });
  });

  it('should be created', inject([ProductListGuardService], (service: ProductListGuardService) => {
    expect(service).toBeTruthy();
  }));
});
