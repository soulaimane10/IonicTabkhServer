import { TestBed } from '@angular/core/testing';

import { BoomarksService } from './boomarks.service';

describe('BoomarksService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BoomarksService = TestBed.get(BoomarksService);
    expect(service).toBeTruthy();
  });
});
