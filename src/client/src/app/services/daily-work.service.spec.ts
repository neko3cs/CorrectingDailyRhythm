import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { DailyWorkService } from './daily-work.service';
import { DailyWork } from '../data/daily-work';

describe('DailyWorkService', () => {
  let service: DailyWorkService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DailyWorkService]
    });
    service = TestBed.inject(DailyWorkService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be get all daily works.', () => {
    service.getDailyWorks().subscribe(
      dailyWorks => expect(dailyWorks.length).toBe(10)
    );
  });

  it('should be deleted', () => {
    let beforeDeletedWorks: DailyWork[] = [];
    service.getDailyWorks().subscribe(
      works => beforeDeletedWorks = works
    );
    let deleteWork = beforeDeletedWorks.slice(0, 1)[0];

    let afterDeletedWorks: DailyWork[] = [];
    service.deleteDailyWork(deleteWork);
    service.getDailyWorks().subscribe(
      works => afterDeletedWorks = works
    );
    expect(beforeDeletedWorks.length - 1).toBe(afterDeletedWorks.length);
    expect(afterDeletedWorks).not.toContain(deleteWork);
  });
});
