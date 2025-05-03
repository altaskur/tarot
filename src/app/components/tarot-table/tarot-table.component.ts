import { Component } from '@angular/core';
import { DeckComponentComponent } from '../deck-component/deck-component.component';

@Component({
  selector: 'app-tarot-table',
  imports: [DeckComponentComponent],
  templateUrl: './tarot-table.component.html',
  styleUrl: './tarot-table.component.scss',
})
export class TarotTableComponent {}
