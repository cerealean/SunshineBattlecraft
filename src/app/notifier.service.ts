import { Injectable } from '@angular/core';
import { PlayerControllerService } from './services/player-controller.service';

@Injectable({
  providedIn: 'root'
})
export class NotifierService {
  constructor(private playerControllerService: PlayerControllerService){}

  public async requestPermissionToNotify(): Promise<boolean> {
    return new Promise<boolean>((resolve) => {
      Notification.requestPermission().then((notificationPermission: NotificationPermission) => {
        resolve(notificationPermission.toString() === 'granted');
      });
    });
  }

  public notify(title: string, message: string) {
    if (this.playerControllerService.playerSettings.hasPermissionToNotify === true) {
      const notification = new Notification(title, { body: message });
      setTimeout(() => {
        notification.close();
      }, 5000);
    }
  }
}
