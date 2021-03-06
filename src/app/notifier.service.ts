import { Injectable } from '@angular/core';
import { PlayerSettingsService } from './player-settings.service';

@Injectable({
  providedIn: 'root'
})
export class NotifierService {
  constructor(private playerSettingsService: PlayerSettingsService){}

  public async requestPermissionToNotify(): Promise<boolean> {
    return new Promise<boolean>((resolve) => {
      Notification.requestPermission().then((notificationPermission: NotificationPermission) => {
        resolve(notificationPermission.toString() === 'granted');
      });
    });
  }

  public notify(title: string, message: string) {
    if (this.playerSettingsService.notificationsEnabled === true) {
      const notification = new Notification(title, { body: message });
      setTimeout(() => {
        notification.close();
      }, 5000);
    }
  }
}
