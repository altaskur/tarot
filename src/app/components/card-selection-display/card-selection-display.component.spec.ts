import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSelectionDisplayComponent } from './card-selection-display.component';

describe('CardSelectionDisplayComponent', () => {
  let component: CardSelectionDisplayComponent;
  let fixture: ComponentFixture<CardSelectionDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardSelectionDisplayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardSelectionDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
