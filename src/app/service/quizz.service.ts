import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


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

  constructor(private http: HttpClient) { }
  
}
