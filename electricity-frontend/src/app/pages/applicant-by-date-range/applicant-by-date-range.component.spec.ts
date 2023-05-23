import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicantByDateRangeComponent } from './applicant-by-date-range.component';

describe('ApplicantByDateRangeComponent', () => {
  let component: ApplicantByDateRangeComponent;
  let fixture: ComponentFixture<ApplicantByDateRangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicantByDateRangeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplicantByDateRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
