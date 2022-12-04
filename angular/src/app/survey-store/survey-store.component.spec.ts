import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyStoreComponent } from './survey-store.component';

describe('SurveyStoreComponent', () => {
  let component: SurveyStoreComponent;
  let fixture: ComponentFixture<SurveyStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurveyStoreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SurveyStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
