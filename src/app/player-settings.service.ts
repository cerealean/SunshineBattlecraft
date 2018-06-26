import { Injectable } from '@angular/core';
import { PlayerSettings } from './models/player-settings';
//import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class PlayerSettingsService {
  private playerSettingsModel: PlayerSettings = new PlayerSettings();

  get notificationsEnabled(): boolean {
    return this.playerSettingsModel.hasPermissionToNotify;
  }

  set notificationsEnabled(value: boolean) {
    this.playerSettingsModel.hasPermissionToNotify = value;
  }

  //constructor(private storageService: StorageService) {}
}
