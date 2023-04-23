import {
  Component,
  OnInit,
  OnDestroy,
  ChangeDetectionStrategy,
} from '@angular/core';
import { Subscription } from 'rxjs';

import { QuizService } from 'src/app/services/quiz.service';
import { QuizSummary } from 'src/app/types/QuizSummary';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardsComponent implements OnInit, OnDestroy {
  summaries: QuizSummary[] = [];
  subscription: Subscription | undefined = undefined;

  constructor(private quizService: QuizService) {}

  ngOnInit(): void {
    this.subscription = this.quizService.getTotalQuiz().subscribe({
      next: (data: QuizSummary[]) => {
        console.log(data);
        this.summaries = data;
      },
      error: (err: any) => console.log(err),
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
