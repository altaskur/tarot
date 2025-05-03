import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralPredictionComponent } from './general-prediction.component';

describe('GeneralPredictionComponent', () => {
  let component: GeneralPredictionComponent;
  let fixture: ComponentFixture<GeneralPredictionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GeneralPredictionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneralPredictionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
