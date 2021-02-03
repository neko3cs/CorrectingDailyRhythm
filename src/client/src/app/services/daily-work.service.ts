import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { DailyWork } from '../data/daily-work';

@Injectable({
  providedIn: 'root'
})
export class DailyWorkService {

  dailyRoutinUrlBase: string = 'http://localhost:3000/dailyWork';
  dailyRoutinList: BehaviorSubject<DailyWork[]> = new BehaviorSubject<DailyWork[]>([]);

  constructor(
    private http: HttpClient
  ) { }

  getDailyRoutins(): Observable<DailyWork[]> {
    this.http.get<DailyWork[]>(this.dailyRoutinUrlBase)
      .subscribe(products => this.dailyRoutinList.next(products));
    return this.dailyRoutinList.asObservable();
  }
}
