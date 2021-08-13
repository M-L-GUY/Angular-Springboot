import { TestBed } from '@angular/core/testing';

import { AuditResponseService } from './audit-response.service';

describe('AuditResponseService', () => {
  let service: AuditResponseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuditResponseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
