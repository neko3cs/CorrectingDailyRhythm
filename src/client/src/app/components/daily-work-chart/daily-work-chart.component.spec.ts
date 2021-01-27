import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyWorkChartComponent } from './daily-work-chart.component';

describe('DailyWorkChartComponent', () => {
  let component: DailyWorkChartComponent;
  let fixture: ComponentFixture<DailyWorkChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailyWorkChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyWorkChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
