import { Component } from '@angular/core';
import { Battler } from './battler';
import { Army } from './characters/army';
import { Character } from './characters/character';
import { Developer } from './characters/developer';
import { RustyKnife } from './weapons/rusty-knife';
import { Broadsword } from './weapons/broadsword';
import { Cloth } from './armor/cloth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  battleLog;

  constructor() {
    this.battleLog = this.MakeFunBattle();
  }

  public MakeFunBattle() {
    const battler = new Battler();

    const pearseSoldiers: Character[] = [];
    for (let i = 0; i < 50; i++) {
      pearseSoldiers.push(new Developer('developer' + i + ' of Pearse'));
    }
    const pearseArmy = new Army('Pearse', pearseSoldiers);

    const sunshineSoldiers: Character[] = [];
    for (let i = 0; i < 50; i++) {
      sunshineSoldiers.push(new Developer('developer' + i + ' of Sunshine', new RustyKnife()));
    }
    sunshineSoldiers[30].weapon = new Broadsword();
    sunshineSoldiers[30].armor = new Cloth();
    const sunshineArmy = new Army('Sunshine', sunshineSoldiers);

    battler.DoBattle(pearseArmy, sunshineArmy);

    return battler.battleLog;
  }
}
