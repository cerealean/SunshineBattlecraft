import { Component, OnInit } from '@angular/core';
import { PlayerControllerService } from '../../services/player-controller.service';

@Component({
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  constructor(private playerControllerService: PlayerControllerService) { }

  ngOnInit() {
  }

  public onNotificationPreferenceChange($event: MouseEvent) {
    if (this.playerControllerService.playerSettings.hasPermissionToNotify) {
      this.playerControllerService.notifier.requestPermissionToNotify().then((canNotify: boolean) => {
        this.playerControllerService.playerSettings.hasPermissionToNotify = canNotify;
        if (canNotify) {
          this.playerControllerService.notifier.notify('Notifications Enabled!', '');
        }
      });
    }
  }

}
