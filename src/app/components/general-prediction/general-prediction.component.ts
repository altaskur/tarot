import { Component, effect, inject } from '@angular/core';
import { TarotDealerService } from '../../services/tarot-dealer.service';
import { TarotIaAdivinationService } from '../../services/tarot-ia-adivination.service';
import { LoadingComponent } from '../loading/loading.component';

@Component({
  selector: 'app-general-prediction',
  imports: [LoadingComponent],
  templateUrl: './general-prediction.component.html',
  styleUrl: './general-prediction.component.scss',
})
export class GeneralPredictionComponent {
  readonly tarotDealer = inject(TarotDealerService);
  readonly tarotIa = inject(TarotIaAdivinationService);

  loading = false;

  constructor() {
    effect(() => {
      if (this.tarotDealer.isCardsMeaningsAvailable()) {
        this.loading = true;
        this.tarotIa.getGeneralMeaning().subscribe({
          next: (response) => {
            this.tarotIa.generalPrediction.set(response);
            this.loading = false;
          },
          error: (error) => {
            console.error('Error fetching card meanings:', error);
            this.loading = false;
          },
        });
      }
    });
  }
}
