import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { PlayerControllerService } from './services/player-controller.service';

@Injectable({
  providedIn: 'root'
})
export class GameStorageService {
  private readonly playerDataKey = 'player-data';

  constructor(
    private storageService: StorageService,
    private playerControllerService: PlayerControllerService
  ) { }

  public saveGame() {
    this.storageService.saveItem(this.playerDataKey, this.playerControllerService.exportPlayerData());
  }

  public loadGame() {
    this.playerControllerService.importPlayerData(this.storageService.getItem(this.playerDataKey));
  }
}
