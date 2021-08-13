import { TestBed } from '@angular/core/testing';

import { QuestionsDataService } from './questions-data.service';

describe('QuestionsDataService', () => {
  let service: QuestionsDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuestionsDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
