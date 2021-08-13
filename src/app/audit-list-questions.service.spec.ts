import { TestBed } from '@angular/core/testing';

import { AuditListQuestionsService } from './audit-list-questions.service';

describe('AuditListQuestionsService', () => {
  let service: AuditListQuestionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuditListQuestionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
