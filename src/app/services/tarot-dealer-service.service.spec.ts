import { TestBed } from '@angular/core/testing';

import { TarotDealerService } from './tarot-dealer.service';

describe('TarotDealerServiceService', () => {
  let service: TarotDealerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TarotDealerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
