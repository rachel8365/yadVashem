import { TestBed } from '@angular/core/testing';

import { AvailablePlacesService } from './available-places.service';

describe('AvailablePlacesService', () => {
  let service: AvailablePlacesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AvailablePlacesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
