import { Component, inject, signal } from '@angular/core';
import { TarotDealerService } from '../../services/tarot-dealer.service';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';
import { Card } from '../../interfaces/tarot-cards.interfaces';
import { TarotIaAdivinationService } from '../../services/tarot-ia-adivination.service';
import { LoadingComponent } from '../loading/loading.component';

@Component({
  selector: 'app-card-selection-display',
  imports: [CommonModule, CardComponent, LoadingComponent],
  templateUrl: './card-selection-display.component.html',
  styleUrl: './card-selection-display.component.scss',
})
export class CardSelectionDisplayComponent {
  readonly tarotDealer = inject(TarotDealerService);
  readonly #tarotIa = inject(TarotIaAdivinationService);

  loader = signal(false);
  cardLoading = signal<number | null>(null);

  onclickCard(card: Card) {
    if (this.loader()) return;
    if (card.flipped) return;

    this.tarotDealer.flipCard(card);
    card.flipped = true;
    this.cardLoading.set(card.number);

    console.log('Card clicked:', card);

    this.loader.set(true);
    this.#tarotIa.getAdivinationCardMeaning(card).subscribe({
      next: (response) => {
        this.loader.set(false);
        this.cardLoading.set(null);
        this.tarotDealer.addPredictionToCard(card, response);
      },
      error: (error) => {
        console.error('Error fetching adivination:', error);
        this.loader.set(false);
        this.cardLoading.set(null);
      },
    });
  }
}
