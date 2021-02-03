import { Component, OnInit } from '@angular/core';
import { DailyWork } from 'src/app/data/daily-work';
import { DailyWorkService } from 'src/app/services/daily-work.service';

// TODO: コンポーネント名を "DailyWorkList" にリネームする
@Component({
  selector: 'app-daily-work-list',
  templateUrl: './daily-work-list.component.html',
  styleUrls: ['./daily-work-list.component.css']
})
export class DailyWorkListComponent implements OnInit {

  dailyRoutines: DailyWork[] = [];
  tableHeaders: string[] = ['time', 'name', 'delete'];
  selectedId: number = 0;

  constructor(
    private dailyRoutineService: DailyWorkService
  ) { }

  ngOnInit(): void {
    this.dailyRoutineService.getDailyRoutins()
      .subscribe(daliyRoutines => this.dailyRoutines = daliyRoutines);
  }

  deleteItem(id: number) {
    // TODO: 削除処理の実装
  }

}
