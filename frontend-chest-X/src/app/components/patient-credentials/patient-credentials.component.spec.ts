import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientCredentialsComponent } from './patient-credentials.component';

describe('PatientCredentialsComponent', () => {
  let component: PatientCredentialsComponent;
  let fixture: ComponentFixture<PatientCredentialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientCredentialsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientCredentialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
