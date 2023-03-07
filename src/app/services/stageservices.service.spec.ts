import { TestBed } from '@angular/core/testing';

import { StageservicesService } from './stageservices.service';

describe('StageservicesService', () => {
  let service: StageservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StageservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
