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

  dailyWorks: DailyWork[] = [];
  tableHeaders: string[] = ['time', 'name', 'delete'];
  selectedId: number = 0;

  constructor(
    private dailyWorkService: DailyWorkService
  ) { }

  ngOnInit(): void {
    this.dailyWorkService.getDailyRoutins()
      .subscribe(daliyRoutines => this.dailyWorks = daliyRoutines);
  }

  deleteItem(id: number) {
    // TODO: 削除処理の実装
  }

}
