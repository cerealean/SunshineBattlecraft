import { Injectable } from '@angular/core';
import { PlayerCurrency } from '../models/player-currency';
import { Structure } from '../structures/structure';
import { Farm } from '../structures/farm';
import { TickerService } from './ticker.service';

@Injectable({
  providedIn: 'root'
})
export class PlayerControllerService {
  public playerCurrency: PlayerCurrency = new PlayerCurrency();
  public playerStructures: Structure[] = [new Farm(new Date())];
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
