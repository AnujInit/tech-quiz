import { Component, Input } from '@angular/core';
import { QuizSummary } from 'src/app/types/QuizSummary';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input('card')
  card: QuizSummary | undefined;
}
