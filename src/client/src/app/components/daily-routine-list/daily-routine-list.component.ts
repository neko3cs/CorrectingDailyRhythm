import { Component, OnInit } from '@angular/core';
import { DailyRoutine } from 'src/app/data/daily-routine';
import { DailyRoutineService } from 'src/app/services/daily-routine.service';

// TODO: コンポーネント名を "DailyWorkList" にリネームする
@Component({
  selector: 'app-daily-routine-list',
  templateUrl: './daily-routine-list.component.html',
  styleUrls: ['./daily-routine-list.component.css']
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
