import { TestBed } from '@angular/core/testing';

import { StokcsService } from './stokcs.service';

describe('StokcsService', () => {
  let service: StokcsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StokcsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
