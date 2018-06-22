import { PlayerSettings } from './models/player-settings';

export class Notifier {
  constructor(private playerSettings: PlayerSettings) {}

  public async requestPermissionToNotify(): Promise<boolean> {
    return new Promise<boolean>((resolve) => {
      Notification.requestPermission().then((notificationPermission: NotificationPermission) => {
        resolve(notificationPermission.toString() === 'granted');
      });
    });
  }

  public notify(title: string, message: string) {
    if (this.playerSettings.hasPermissionToNotify === true) {
      const notification = new Notification(title, { body: message });
      setTimeout(() => {
        notification.close();
      }, 5000);
    }
  }
}
