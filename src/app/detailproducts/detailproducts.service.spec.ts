import { TestBed } from '@angular/core/testing';

import { DetailproductsService } from './detailproducts.service';

describe('DetailproductsService', () => {
  let service: DetailproductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetailproductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
