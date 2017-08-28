import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GameViewPage } from './game-view';

@NgModule({
  declarations: [
    GameViewPage,
  ],
  imports: [
    IonicPageModule.forChild(GameViewPage),
  ],
})
export class GameViewPageModule {}
