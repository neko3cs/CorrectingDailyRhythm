import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { DailyWorkService } from './daily-work.service';
import { DailyWork } from '../data/daily-work';

describe('DailyWorkService', () => {
  let httpClientSpy: { get: jasmine.Spy, delete: jasmine.Spy };
  let service: DailyWorkService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DailyWorkService]
    }).compileComponents();
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get', 'delete']);
    service = new DailyWorkService(httpClientSpy as any);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be get all daily works.', () => {
    const expected = [
      new DailyWork(1, "就寝", new Date("2000-01-01 13:00:00.000 +0900Z"), new Date("2000-01-01 20:30:00.000 +0900Z")),
      new DailyWork(2, "起床", new Date("2000-01-01 20:30:00.000 +0900Z"), new Date("2000-01-01 21:00:00.000 +0900Z")),
      new DailyWork(3, "朝活", new Date("2000-01-01 21:00:00.000 +0900Z"), new Date("2000-01-01 0:00:00.000 +0900Z"))
    ];

    httpClientSpy.get.and.returnValue(of(expected));

    service.getDailyWorks().subscribe(
      dailyWorks => expect(expected).toEqual(dailyWorks)
    );
    expect(httpClientSpy.get.calls.count()).toBe(1);
  });

  it('should be delete the daily work.', () => {
    const deleted = new DailyWork(3, "朝活", new Date("2000-01-01 21:00:00.000 +0900Z"), new Date("2000-01-01 0:00:00.000 +0900Z"));
    const after = [
      new DailyWork(1, "就寝", new Date("2000-01-01 13:00:00.000 +0900Z"), new Date("2000-01-01 20:30:00.000 +0900Z")),
      new DailyWork(2, "起床", new Date("2000-01-01 20:30:00.000 +0900Z"), new Date("2000-01-01 21:00:00.000 +0900Z"))
    ];
    const before = after.concat(deleted);
    httpClientSpy.get.and.returnValue(of(before));
    httpClientSpy.delete.and.returnValue(of(after));

    service.getDailyWorks().subscribe();
    expect(httpClientSpy.get.calls.count()).toBe(1);

    // FIXME: 戻り値がおかしい（HttpClient#deleteの仕様を確認して、実装を直すこと）
    service.deleteDailyWork(deleted).subscribe(
      dailyWork => expect(deleted).toEqual(dailyWork)
    );
    expect(httpClientSpy.delete.calls.count()).toBe(1);
  });
});
