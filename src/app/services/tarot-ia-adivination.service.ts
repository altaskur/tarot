import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Card } from '../interfaces/tarot-cards.interfaces';
import { map, Observable, of } from 'rxjs';
import { TarotDealerService } from './tarot-dealer.service';

@Injectable({
  providedIn: 'root',
})
export class TarotIaAdivinationService {
  readonly #http = inject(HttpClient);
  readonly #tarotDealer = inject(TarotDealerService);
  readonly #API_URL = '/api/generate';
  generalPrediction = signal<string>('');

  sendPrompt(prompt: string): Observable<string> {
    const body = {
      model: 'llama3:8b',
      prompt: prompt,
      stream: false,
    };

    return this.#http
      .post<{ response: string }>(this.#API_URL, body, {
        responseType: 'json' as const,
      })
      .pipe(map((res) => res.response));
  }

  getAdivinationCardMeaning(card: Card): Observable<string> {
    const prompt = `Eres un experto en tarot.Conoces el Tarot de Isaac, un mazo de 22 arcanos mayores adaptados al mundo digital y creativo. Lo interpretas con precisión simbólica. Tu tarea es dar una interpretación de la carta ${card.name} en la posición ${card.position}. La carta representa: ${card.meaning}. ¿Cuál es su significado? intenta hacer una frase corta y concisa. No te extiendas en detalles. Responde con el significado de la carta y con una muy breve descripción del arcano de una frase y en un mismo texto, en perfecto castellano.`;

    return this.sendPrompt(prompt).pipe(
      map((response) => {
        return response;
      })
    );
  }

  getGeneralMeaning(): Observable<string> {
    const selectedCards = this.#tarotDealer.selectedCards();
    const prompt = `Eres un experto en tarot y conoces el Tarot de Isaac. Tu tarea es crear una predicción general muy breve basada en estas tres cartas: ${selectedCards
      .map((card) => `${card.name} (${card.position})`)
      .join(', ')}.

    Elabora una predicción concisa de aproximadamente 3 frases en total. Menciona brevemente los arcanos y su relación entre pasado, presente y futuro, ofreciendo un mensaje claro y directo. No te extiendas. Responde solo con la predicción, sin introducción ni conclusión adicional.`;

    return this.sendPrompt(prompt).pipe(
      map((response) => {
        this.generalPrediction.set(response);
        return response;
      })
    );
  }
}
