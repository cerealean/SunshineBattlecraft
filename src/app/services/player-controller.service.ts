import { Injectable } from '@angular/core';
import { PlayerCurrency } from '../models/player-currency';
import { Structure } from '../structures/structure';
import { Farm } from '../structures/farm';
import { TickerService } from './ticker.service';
import { TreeMill } from '../structures/tree-mill';

@Injectable({
  providedIn: 'root'
})
export class PlayerControllerService {
  public playerCurrency: PlayerCurrency = new PlayerCurrency();
  public playerStructures: Structure[] = [
    new Farm(new Date()), 
    new Farm(new Date(new Date().getTime() - 6000000000)), 
    new TreeMill(new Date(new Date().getTime() - 60000))
  ];
  constructor(
    private tickerService: TickerService
  ) { 
    tickerService.onTick(() => {
      this.playerStructures.forEach(structure => {
        const tickAction = structure.OnTick();
        this.playerCurrency.addPlayerCurrency(tickAction.CurrencyChange);
      });
    })
  }
}
