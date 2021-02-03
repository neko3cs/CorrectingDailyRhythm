import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyRoutineListComponent } from './daily-work-list.component';

describe('DailyRoutineListComponent', () => {
  let component: DailyRoutineListComponent;
  let fixture: ComponentFixture<DailyRoutineListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailyRoutineListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyRoutineListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
