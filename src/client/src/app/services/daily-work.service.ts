import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { DailyRoutine } from '../data/daily-work';

@Injectable({
  providedIn: 'root'
})
export class DailyRoutineService {

  dailyRoutinUrlBase: string = 'http://localhost:3000/dailyRoutine';
  dailyRoutinList: BehaviorSubject<DailyRoutine[]> = new BehaviorSubject<DailyRoutine[]>([]);

  constructor(
    private http: HttpClient
  ) { }

  getDailyRoutins(): Observable<DailyRoutine[]> {
    this.http.get<DailyRoutine[]>(this.dailyRoutinUrlBase)
      .subscribe(products => this.dailyRoutinList.next(products));
    return this.dailyRoutinList.asObservable();
  }
}
