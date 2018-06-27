import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { PlayerControllerService } from './services/player-controller.service';
import { interval } from 'rxjs';
import { PlayerSettingsService } from './player-settings.service';

@Injectable({
  providedIn: 'root'
})
export class AutoSaveService {

  constructor(
    private storageService: StorageService,
    private playerController: PlayerControllerService,
    private playerSettingsService: PlayerSettingsService
  ) {
    interval(5000).subscribe(() => {
      if(this.playerSettingsService.autoSaveEnabled){
        this.saveGame();
      }
    });
  }

   private saveGame(){
    this.storageService.saveItem("game-autosave", this.playerController.exportPlayerData());
   }

}
