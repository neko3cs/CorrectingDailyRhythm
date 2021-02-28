import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { DailyWork } from '../data/daily-work';

@Injectable({
  providedIn: 'root'
})
export class DailyWorkService {

  private dailyWorksUrlBase: string = `${environment.host}/dailyWork`;
  private dailyWorks: BehaviorSubject<DailyWork[]> = new BehaviorSubject<DailyWork[]>([]);

  constructor(
    private http: HttpClient
  ) { }

  getDailyWorks(): Observable<DailyWork[]> {
    this.http.get<DailyWork[]>(this.dailyWorksUrlBase)
      .subscribe(dailyWorks => this.dailyWorks.next(dailyWorks));
    return this.dailyWorks.asObservable();
  }

  deleteDailyWork(deleted: DailyWork): Observable<DailyWork[]> {
    this.http.delete<DailyWork>(
      `${this.dailyWorksUrlBase}/${deleted.id}`,
      { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) })
      .pipe(tap(deleted => {
        const newDailyWorks = this.dailyWorks.getValue()
          .filter(dailyWork => dailyWork.id !== deleted.id);
        this.dailyWorks.next(newDailyWorks);
      }));
    return this.dailyWorks.asObservable();
  }
}
