import { Injectable } from '@angular/core';
import { PlayerCurrency } from '../models/player-currency';
import { Structure } from '../structures/structure';
import { Farm } from '../structures/farm';
import { TickerService } from './ticker.service';
import { TreeMill } from '../structures/tree-mill';
import { GoldMine } from '../structures/gold-mine';

@Injectable({
  providedIn: 'root'
})
export class PlayerControllerService {
  public playerCurrency: PlayerCurrency = new PlayerCurrency();
  private _playerStructures: Structure[];

  get playerStructures(){
    return this._playerStructures;
  }

  set playerStructures(value: Structure[]){
    this._playerStructures = value;
    this._playerStructures.sort(this.sortStructuresByName());
  }

  constructor(
    private tickerService: TickerService
  ) { 
    tickerService.onTick(() => {
      this._playerStructures.forEach(structure => {
        const tickAction = structure.OnTick();
        this.playerCurrency.addPlayerCurrency(tickAction.CurrencyChange);
      });
    });

    this.playerStructures = [
      new Farm(new Date()), 
      new Farm(new Date(new Date().getTime() - 6000000000)), 
      new TreeMill(new Date(new Date().getTime() - 60000)),
      new GoldMine(new Date())
    ];
  }

  private sortStructuresByName(): (a: Structure, b: Structure) => number {
    return (first: Structure, second: Structure) => {
      if (first.name > second.name) {
        return 1;
      }
      else if (first.name < second.name) {
        return -1;
      }
      else {
        return 0;
      }
    };
  }
}
