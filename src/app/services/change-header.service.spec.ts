import { TestBed } from '@angular/core/testing';

import { ChangeHeaderService } from './change-header.service';

describe('ChangeHeaderService', () => {
  let service: ChangeHeaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChangeHeaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
