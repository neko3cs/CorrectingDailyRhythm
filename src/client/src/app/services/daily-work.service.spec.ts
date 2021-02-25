import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { DailyWorkService } from './daily-work.service';
import { DailyWork } from '../data/daily-work';

describe('DailyWorkService', () => {
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let service: DailyWorkService;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get', 'delete']);

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        DailyWorkService,
        { provide: HttpClient, useValue: httpClientSpy }
      ]
    }).compileComponents();

    service = TestBed.inject(DailyWorkService);
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
    httpClientSpy.delete.and.returnValue(of(deleted));

    service.deleteDailyWork(deleted).subscribe(
      dailyWork => expect(dailyWork).toEqual(deleted)
    );
    expect(httpClientSpy.delete.calls.count()).toBe(1);
  });
});
