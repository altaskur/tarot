import { CommonModule } from '@angular/common';
import { Component, Input, input, signal } from '@angular/core';
import { Card } from '../../interfaces/tarot-cards.interfaces';

@Component({
  selector: 'app-card',
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input({ required: true }) card: Card = {
    number: 0,
    name: 'Unknown',
    meaning: 'No meaning available',
    position: 'Unknown',
    flipped: false,
  };
}
