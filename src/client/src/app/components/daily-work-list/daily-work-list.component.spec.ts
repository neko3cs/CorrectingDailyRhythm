import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DailyWorkService } from 'src/app/services/daily-work.service';

import { DailyWorkListComponent } from './daily-work-list.component';

describe('DailyWorkListComponent', () => {
  let component: DailyWorkListComponent;
  let fixture: ComponentFixture<DailyWorkListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [DailyWorkService],
      declarations: [DailyWorkListComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyWorkListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
