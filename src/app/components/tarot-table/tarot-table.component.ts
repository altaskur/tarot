import { Component } from '@angular/core';
import { DeckComponentComponent } from '../deck-component/deck-component.component';
import { CardSelectionDisplayComponent } from '../card-selection-display/card-selection-display.component';
import { GeneralPredictionComponent } from '../general-prediction/general-prediction.component';

@Component({
  selector: 'app-tarot-table',
  imports: [
    DeckComponentComponent,
    CardSelectionDisplayComponent,
    GeneralPredictionComponent,
  ],
  templateUrl: './tarot-table.component.html',
  styleUrl: './tarot-table.component.scss',
})
export class TarotTableComponent {}
