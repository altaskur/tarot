import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarotTableComponent } from './tarot-table.component';

describe('TarotTableComponent', () => {
  let component: TarotTableComponent;
  let fixture: ComponentFixture<TarotTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TarotTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarotTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
