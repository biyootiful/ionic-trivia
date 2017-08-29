import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GameViewPage } from '../game-view/game-view';
import { Storage } from '@ionic/storage';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-results',
  templateUrl: 'results.html',
})
export class ResultsPage {
  results: any;
  quizTotal: number;
  correctTotal: number;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private storage: Storage) {
  }

  ionViewWillEnter() {
    this.storage.get('results').then((val) => {
      this.results = val;
      this.quizTotal = this.results.length;
      
      let filterAnswers = this.results.filter(
        answer => answer.yourAnswer === answer.correctAnswer
      );

      this.correctTotal = filterAnswers.length;
    });
  }

  backHome() {
    this.navCtrl.setRoot(HomePage);
  }

  restart() {
    this.navCtrl.setRoot(GameViewPage);
    this.storage.set('quizIndex', 0);
    this.storage.set('results', []);
  }

}
