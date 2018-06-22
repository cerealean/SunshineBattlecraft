import { Injectable } from '@angular/core';
import { PlayerCurrency } from '../models/player-currency';
import { Structure } from '../structures/structure';
import { TickerService } from './ticker.service';
import { TownCenter } from '../structures/town-center';
import { GoldMine } from '../structures/gold-mine';
import { TreeMill } from '../structures/tree-mill';
import { OreMine } from '../structures/ore-mine';
import { Farm } from '../structures/farm';
import { Notifier } from '../notifier';
import { PlayerSettings } from '../models/player-settings';

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
  public playerSettings: PlayerSettings = new PlayerSettings();
  public notifier = new Notifier(this.playerSettings);

  constructor(
    private tickerService: TickerService
  ) {
    tickerService.onTick(() => {
      this.notifier.notify('Hi!', 'This is a tick');
      this.playerStructures.forEach(structure => {
        const tickAction = structure.OnTick();
        this.playerCurrency.addPlayerCurrency(tickAction.CurrencyChange);
      });
    });
  }

  public exportPlayerData() {
    return JSON.stringify({
      'playerCurrency': this.playerCurrency,
      'playerStructures': this.playerStructures,
      'structuresAvailableForPurchase': this.structuresAvailableForPurchase
    });
  }

  public importPlayerData(playerData: string) {
    const deserializedData = JSON.parse(playerData);

    this.playerCurrency = deserializedData.playerCurrency;
    this.playerStructures = deserializedData.playerStructures;
    this.structuresAvailableForPurchase = deserializedData.structuresAvailableForPurchase;
  }
}
