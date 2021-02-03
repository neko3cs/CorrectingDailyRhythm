import { TestBed } from '@angular/core/testing';

import { DailyRoutineService } from './daily-work.service';

describe('DailyRoutineService', () => {
  let service: DailyRoutineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DailyRoutineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
