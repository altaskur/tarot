import { Component } from '@angular/core';
import { TarotTableComponent } from './components/tarot-table/tarot-table.component';

@Component({
  selector: 'app-root',

  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [TarotTableComponent],
})
export class AppComponent {}
