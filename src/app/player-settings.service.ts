import { Injectable } from '@angular/core';
import { PlayerSettings } from './models/player-settings';

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

  public export(): PlayerSettings {
    return this.playerSettingsModel;
  }

  public import(playerSettingsModel: PlayerSettings) {
    this.playerSettingsModel = playerSettingsModel;
  }
}
