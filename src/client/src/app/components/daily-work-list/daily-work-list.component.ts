import { Component, OnInit } from '@angular/core';
import { DailyRoutine } from 'src/app/data/daily-work';
import { DailyRoutineService } from 'src/app/services/daily-work.service';

// TODO: コンポーネント名を "DailyWorkList" にリネームする
@Component({
  selector: 'app-daily-work-list',
  templateUrl: './daily-work-list.component.html',
  styleUrls: ['./daily-work-list.component.css']
})
export class DailyRoutineListComponent implements OnInit {

  dailyRoutines: DailyRoutine[] = [];
  tableHeaders: string[] = ['time', 'name', 'delete'];
  selectedId: number = 0;

  constructor(
    private dailyRoutineService: DailyRoutineService
  ) { }

  ngOnInit(): void {
    this.dailyRoutineService.getDailyRoutins()
      .subscribe(daliyRoutines => this.dailyRoutines = daliyRoutines);
  }

  deleteItem(id: number) {
    // TODO: 削除処理の実装
  }

}
