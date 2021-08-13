import { TestBed } from '@angular/core/testing';

import { CheckListQuestionsService } from './check-list-questions.service';

describe('CheckListQuestionsService', () => {
  let service: CheckListQuestionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheckListQuestionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
