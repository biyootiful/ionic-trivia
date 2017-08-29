import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GameViewPage } from '../game-view/game-view';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-feedback',
  templateUrl: 'feedback.html',
})
export class FeedbackPage {
  
  answerIsCorrect: boolean;
  correctAnswer: string;
  currentIndex: number;
  totalQuizNum: number
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private storage: Storage
  ) {
    let result = navParams.get('checkAnswer'),
        correctAnswer = navParams.get('correctAnswer'),
        total = navParams.get('totalQuizNum')
    this.answerIsCorrect = result;
    this.correctAnswer = correctAnswer;
    this.totalQuizNum = total;
  }

  ionViewWillEnter(){
    this.storage.get('quizIndex').then((val) => {
      this.currentIndex = val;
    });
  }

  nextQuiz() {
    this.storage.get('quizIndex').then((val) => {
      let currentQuizIndex = val;
      this.storage.set('quizIndex', currentQuizIndex + 1);
    });
    this.navCtrl.setRoot(GameViewPage);
  } 

}
