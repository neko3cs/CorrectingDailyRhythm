import { Component, OnInit } from '@angular/core';
import { DailyWork } from 'src/app/data/daily-work';
import { DailyWorkService } from 'src/app/services/daily-work.service';

@Component({
  selector: 'app-daily-work-list',
  templateUrl: './daily-work-list.component.html',
  styleUrls: ['./daily-work-list.component.css']
})
export class DailyWorkListComponent implements OnInit {

  dailyWorks: DailyWork[] = [];
  tableHeaders: string[] = ['time', 'name', 'delete'];
  selectedId: number = 0;

  constructor(
    private dailyWorkService: DailyWorkService
  ) { }

  ngOnInit(): void {
    this.dailyWorkService.getDailyWorks()
      .subscribe(daliyWorks => this.dailyWorks = daliyWorks);
  }

  deleteDailyWork(dailyWork: DailyWork) {
    // TODO: 実装する
  }

}
