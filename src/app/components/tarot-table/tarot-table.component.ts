import { Component } from '@angular/core';
import { DeckComponentComponent } from '../deck-component/deck-component.component';
import { CardSelectionDisplayComponent } from '../card-selection-display/card-selection-display.component';

@Component({
  selector: 'app-tarot-table',
  imports: [DeckComponentComponent, CardSelectionDisplayComponent],
  templateUrl: './tarot-table.component.html',
  styleUrl: './tarot-table.component.scss',
})
export class TarotTableComponent {}
