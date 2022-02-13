import { TestBed } from '@angular/core/testing';

import { ReposRequestService } from './repos-request.service';

describe('ReposRequestService', () => {
  let service: ReposRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReposRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
