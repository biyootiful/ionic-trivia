import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class QuizProvider {
  url:string;

  constructor(public http: Http) {
    console.log('Hello QuizProvider Provider');
    this.url = 'https://opentdb.com/api.php?amount='
  }

  getQuiz(category, difficulty, quizNum){
    return this.http.get(this.url + quizNum + '&category=' + category + '&difficulty=' + difficulty)
      .map(res => res.json());
  }
}
