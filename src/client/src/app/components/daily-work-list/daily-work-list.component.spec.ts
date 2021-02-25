import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DailyWorkService } from 'src/app/services/daily-work.service';

import { DailyWorkListComponent } from './daily-work-list.component';

describe('DailyWorkListComponent', () => {
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let component: DailyWorkListComponent;
  let fixture: ComponentFixture<DailyWorkListComponent>;

  beforeEach(async () => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);

    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        DailyWorkService,
        { provider: HttpClient, useValue: httpClientSpy }
      ],
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
