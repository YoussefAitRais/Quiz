import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TriviaQuestion} from '../service/trivia-question.interface';
import { response } from 'express';
import { map } from 'rxjs/operators';



export interface quizzQuestion {
  category : String;
  type: String ;
  difficulty : String;
  question : String;
  correct_answer : String;
  incorrect_answer : String[];
  all_answer: String[];
}

@Injectable({
  providedIn: 'root'
})
export class QuizzService {

  private API_URL = 'https://opentdb.com/api.php?amount=10&type=multiple';

  constructor(private http: HttpClient) { }

  getQuestion(): Observable<TriviaQuestion[]> {
     
    return this.http.get<any>(this.API_URL)
    .pipe(
      map(response => response.results as TriviaQuestion[])
    );
  }
  


  
}


