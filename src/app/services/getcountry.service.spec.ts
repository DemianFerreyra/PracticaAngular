import { TestBed } from '@angular/core/testing';

import { GetcountryService } from './getcountry.service';

describe('GetcountryService', () => {
  let service: GetcountryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetcountryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
