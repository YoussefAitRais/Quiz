import { Component, OnInit } from '@angular/core';
import { QuizzService } from '../service/quizz.service';
import { TriviaQuestion } from '../service/trivia-question.interface';

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.css']
})

export class QuizzComponent implements OnInit {
  questions: TriviaQuestion[] = [];
  
  constructor(private quizzService: QuizzService) { }

  ngOnInit(): void {
    this.quizzService.getQuestion().subscribe((data: TriviaQuestion[]) => {
      this.questions = data;
      console.log(this.questions); // Optional: For debugging
    });
  }
}
