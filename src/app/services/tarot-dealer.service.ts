import { computed, Injectable, signal } from '@angular/core';
import { POSITIONS, TAROT_CARDS } from '../data/tarot-cards.data';
import { Card } from '../interfaces/tarot-cards.interfaces';

@Injectable({
  providedIn: 'root',
})
export class TarotDealerService {
  readonly #tarotCards = TAROT_CARDS;
  readonly #POSITIONS = POSITIONS;
  shuffledDeck = signal<Card[]>([]);

  selectedCards = computed(() => {
    const deck = this.shuffledDeck();
    return deck.length > 0 ? this.selectThreeCards() : [];
  });

  isCardsMeaningsAvailable = computed(() => {
    const cards = this.selectedCards();
    if (cards.length === 0) return false;
    return cards.every((card) => card.prediction);
  });

  shuffleCards(): void {
    const newDeck = [...this.#tarotCards];
    newDeck.sort(() => Math.random() - 0.5);
    this.shuffledDeck.set(newDeck);
  }

  selectThreeCards() {
    const selectedCards = this.shuffledDeck()
      .slice(0, 3)
      .map((card, index) => {
        return {
          ...card,
          position: this.#POSITIONS[index],
        };
      });

    return selectedCards;
  }

  flipCard(card: Card) {
    const flippedCard = { ...card, flipped: !card.flipped };
    this.shuffledDeck.set(
      this.shuffledDeck().map((c) =>
        c.number === card.number ? flippedCard : c
      )
    );
  }

  addPredictionToCard(card: Card, prediction: string) {
    const updatedCard = { ...card, prediction };

    this.shuffledDeck.set(
      this.shuffledDeck().map((c) =>
        c.number === card.number ? updatedCard : c
      )
    );
  }
}
