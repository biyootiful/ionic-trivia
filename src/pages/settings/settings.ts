import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  category:number;
  difficulty:string;
  quizNum:number;
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private storage:Storage
  ) {
    this.storage.get('option').then((val) => {
      if(val != null){
        let option = JSON.parse(val);
        this.category = option.category;
        this.difficulty = option.difficulty;
        this.quizNum = option.quizNum;
      } else {
        this.category = 17;
        this.difficulty = 'medium';
        this.quizNum = 10;
      }
    })
  }

  saveForm(){
    let option = {
      category: this.category,
      difficulty: this.difficulty,
      quizNum: this.quizNum
    } 
    this.storage.set('option', JSON.stringify(option));
    this.navCtrl.push(HomePage);
  }

}
