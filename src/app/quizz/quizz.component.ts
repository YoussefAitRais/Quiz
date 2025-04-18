import { Component, OnInit } from '@angular/core';
import { QuizzService } from '../service/quizz.service';
import { TriviaQuestion } from '../service/trivia-question.interface';
import { error } from 'console';

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.css']
})

export class QuizzComponent implements OnInit {
  questions: TriviaQuestion[] = [];
  
  constructor(private quizzService: QuizzService) { }

  ngOnInit(): void {
    this.quizzService.getQuestion().subscribe({
      next: (data: TriviaQuestion[]) => {
          console.log(data) // Optional: For debugging
      },
      error: (error) => {
        if (error.status === 429) {
          console.error('Too many requests – please try again later.');
          alert('Too many requests – please wait a moment.');
        } else {
          console.error('An error occurred:', error);
        }
      }
    });
  }
}
