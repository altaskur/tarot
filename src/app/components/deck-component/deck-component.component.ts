import { Component, inject } from '@angular/core';
import { TarotDealerService } from '../../services/tarot-dealer.service';

@Component({
  selector: 'app-deck-component',
  imports: [],
  templateUrl: './deck-component.component.html',
  styleUrl: './deck-component.component.scss',
})
export class DeckComponentComponent {
  readonly tarotDealer = inject(TarotDealerService);

  onCardClick(): void {
    this.tarotDealer.shuffleCards();
  }
}
