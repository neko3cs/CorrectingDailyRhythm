import { fakeAsync, inject, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { DailyWorkService } from './daily-work.service';
import { DailyWork } from '../data/daily-work';
import { environment } from 'src/environments/environment';

describe('DailyWorkService', () => {
  let dailyWorksUrlBase: string = `${environment.host}/dailyWork`;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        DailyWorkService,
        HttpTestingController
      ]
    }).compileComponents();
  });

  it('should be created',
    inject([DailyWorkService], (service: DailyWorkService) => {
      expect(service).toBeTruthy();
    }));

  it('should be get all daily works.',
    fakeAsync(() =>
      inject([DailyWorkService, HttpTestingController], (service: DailyWorkService, httpMock: HttpTestingController) => {
        const responseMock = [
          new DailyWork(1, "就寝", new Date("2000-01-01 13:00:00.000 +0900Z"), new Date("2000-01-01 20:30:00.000 +0900Z")),
          new DailyWork(2, "起床", new Date("2000-01-01 20:30:00.000 +0900Z"), new Date("2000-01-01 21:00:00.000 +0900Z")),
          new DailyWork(3, "朝活", new Date("2000-01-01 21:00:00.000 +0900Z"), new Date("2000-01-01 0:00:00.000 +0900Z"))
        ];

        service.getDailyWorks().subscribe(
          dailyWorks => expect(dailyWorks).toEqual(responseMock)
        );

        const testRequest = httpMock.expectOne({ url: `${dailyWorksUrlBase}/dailyWork` });
        expect(testRequest.request.method).toEqual("GET");
        testRequest.flush({ body: responseMock });

        httpMock.verify();
      })));

  it('should be delete the daily work.',
    fakeAsync(() =>
      inject([DailyWorkService, HttpTestingController], (service: DailyWorkService, httpMock: HttpTestingController) => {
        const deleted = new DailyWork(3, "朝活", new Date("2000-01-01 21:00:00.000 +0900Z"), new Date("2000-01-01 0:00:00.000 +0900Z"));

        service.deleteDailyWork(deleted).subscribe(
          dailyWork => expect(dailyWork).toEqual(deleted)
        );

        const testRequest = httpMock.expectOne({ method: "DELETE", url: `${dailyWorksUrlBase}/dailyWork/${deleted.id}` });
        expect(testRequest.request.method).toEqual("DELETE");
        testRequest.flush({ body: null });  // FIXME: null返してもテスト通る

        httpMock.verify();
      })));

});
