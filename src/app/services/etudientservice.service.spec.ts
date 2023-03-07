import { TestBed } from '@angular/core/testing';

import { EtudientserviceService } from './etudientservice.service';

describe('EtudientserviceService', () => {
  let service: EtudientserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EtudientserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
