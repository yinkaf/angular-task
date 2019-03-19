import { TestBed } from '@angular/core/testing';

import { InMemmoryDataService } from './in-memmory-data.service';

describe('InMemmoryDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InMemmoryDataService = TestBed.get(InMemmoryDataService);
    expect(service).toBeTruthy();
  });
});
