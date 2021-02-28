import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { DailyWork } from '../data/daily-work';

@Injectable({
  providedIn: 'root'
})
export class DailyWorkService {

  private dailyWorksUrlBase: string = `${environment.host}/dailyWork`;

  constructor(
    private http: HttpClient
  ) { }

  getDailyWorks(): Observable<DailyWork[]> {
    return this.http.get<DailyWork[]>(this.dailyWorksUrlBase);
  }

  deleteDailyWork(deleted: DailyWork): Observable<DailyWork> {
    return this.http.delete<DailyWork>(`${this.dailyWorksUrlBase}/${deleted.id}`);
  }

}
