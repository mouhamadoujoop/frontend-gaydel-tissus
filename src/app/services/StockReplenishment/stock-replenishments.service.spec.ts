import { TestBed } from '@angular/core/testing';

import { StockReplenishmentsService } from './stock-replenishments.service';

describe('StockReplenishmentsService', () => {
  let service: StockReplenishmentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StockReplenishmentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
