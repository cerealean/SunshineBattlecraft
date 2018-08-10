import { Injectable } from '@angular/core';
import { PlayerCurrency } from '../models/player-currency';
import { Structure } from '../structures/structure';
import { TickerService } from './ticker.service';
import { TownCenter } from '../structures/town-center';
import { GoldMine } from '../structures/gold-mine';
import { TreeMill } from '../structures/tree-mill';
import { OreMine } from '../structures/ore-mine';
import { Farm } from '../structures/farm';
import { NotifierService } from '../notifier.service';
import { PlayerSettingsService } from '../player-settings.service';
import { PlayerDataExport } from '../models/playerDataExport';
import { StorageService } from '../storage.service';

@Injectable({
  providedIn: 'root'
})
export class PlayerControllerService {
  public playerCurrency: PlayerCurrency = new PlayerCurrency();
  public playerStructures: Structure[];
  public structuresAvailableForPurchase: Structure[];

  constructor(
    private tickerService: TickerService,
    private notifierService: NotifierService,
    private playerSettingsService: PlayerSettingsService,
    private storageService: StorageService
  ) {
    const currentSavedGame = this.storageService.getItem('SunshineBattlecraft');
    if (currentSavedGame) {
      this.importPlayerData(currentSavedGame);
    } else {
      this.playerStructures = [
        new TownCenter(new Date(), Number.MAX_SAFE_INTEGER),
        new GoldMine(new Date(), Number.MAX_SAFE_INTEGER),
        new TreeMill(new Date(), Number.MAX_SAFE_INTEGER),
        new OreMine(new Date(), Number.MAX_SAFE_INTEGER),
        new Farm(new Date(), Number.MAX_SAFE_INTEGER)
      ];

      this.structuresAvailableForPurchase = [
        new GoldMine(new Date()),
        new TreeMill(new Date()),
        new OreMine(new Date()),
        new Farm(new Date())
      ];
    }
    this.setupTickActions();
  }

  private setupTickActions() {
    this.tickerService.onTick(() => {
      this.notifierService.notify('Tick!', 'Time has moved forward in your world');
      this.playerStructures.forEach(structure => {
        const tickAction = structure.OnTick();
        this.playerCurrency.addPlayerCurrency(tickAction.CurrencyChange);
        this.storageService.saveItem('SunshineBattlecraft', this.exportPlayerData());
      });
    });
  }

  public exportPlayerData() {
    const exportedData = JSON.stringify(<PlayerDataExport> {
      'playerCurrency': this.playerCurrency,
      'playerStructures': this.playerStructures,
      'structuresAvailableForPurchase': this.structuresAvailableForPurchase,
      'playerSettings': this.playerSettingsService.export()
    });

    return exportedData;
  }

  public importPlayerData(playerData: string) {
    const deserializedData = <PlayerDataExport> JSON.parse(playerData);

    this.playerCurrency = PlayerCurrency.import(deserializedData.playerCurrency);
    this.playerStructures = Structure.importMany(deserializedData.playerStructures);
    this.structuresAvailableForPurchase = Structure.importMany(deserializedData.structuresAvailableForPurchase);
    this.playerSettingsService.import(deserializedData.playerSettings);
  }
}
