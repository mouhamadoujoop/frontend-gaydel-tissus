import { TestBed } from '@angular/core/testing';

import { StokcTransfersService } from './stokc-transfers.service';

describe('StokcTransfersService', () => {
  let service: StokcTransfersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StokcTransfersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
