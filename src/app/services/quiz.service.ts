import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { QuizSummary } from '../types/QuizSummary';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  constructor(private http: HttpClient) {}

  getTotalQuiz(): Observable<QuizSummary[]> {
    let summary: QuizSummary[] = [
      { type: 'HTML', totalQuiz: 40, color: 'beige', duration: 1, UOM: 'hour' },
      {
        type: 'CSS',
        totalQuiz: 20,
        color: 'azure',
        duration: 30,
        UOM: 'minutes',
      },
      {
        type: 'Javascript',
        totalQuiz: 25,
        color: 'beige',
        duration: 1.5,
        UOM: 'hours',
      },
      {
        type: 'Bootstrap 5',
        totalQuiz: 25,
        color: 'blanchedalmond',
        duration: 1,
        UOM: 'hour',
      },
      {
        type: 'Angular',
        totalQuiz: 25,
        color: 'aliceblue',
        duration: 1,
        UOM: 'hour',
      },
      {
        type: 'SQL',
        totalQuiz: 25,
        color: 'antiquewhite',
        duration: 1,
        UOM: 'hour',
      },
    ];
    return of(summary);
  }
}
