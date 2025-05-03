import { TestBed } from '@angular/core/testing';

import { TarotIaAdivinationService } from './tarot-ia-adivination.service';

describe('TarotIaAdivinationService', () => {
  let service: TarotIaAdivinationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TarotIaAdivinationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
