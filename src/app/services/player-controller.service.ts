import { Injectable } from '@angular/core';
import { PlayerCurrency } from '../models/player-currency';
import { Structure } from '../structures/structure';
import { TickerService } from './ticker.service';
import { TownCenter } from '../structures/town-center';
import { GoldMine } from '../structures/gold-mine';
import { TreeMill } from '../structures/tree-mill';
import { OreMine } from '../structures/ore-mine';
import { Farm } from '../structures/farm';

@Injectable({
  providedIn: 'root'
})
export class PlayerControllerService {
  public playerCurrency: PlayerCurrency = new PlayerCurrency();
  public playerStructures: Structure[] = [
    new TownCenter(new Date()),
    new GoldMine(new Date()),
    new TreeMill(new Date()),
    new OreMine(new Date()),
    new Farm(new Date())
  ];
  public structuresAvailableForPurchase: Structure[] = [
    new GoldMine(new Date()),
    new TreeMill(new Date()),
    new OreMine(new Date()),
    new Farm(new Date())
  ];

  constructor(
    private tickerService: TickerService
  ) {
    tickerService.onTick(() => {
      this.playerStructures.forEach(structure => {
        const tickAction = structure.OnTick();
        this.playerCurrency.addPlayerCurrency(tickAction.CurrencyChange);
      });
    });
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
