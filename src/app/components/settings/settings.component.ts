import { Component, OnInit } from '@angular/core';
import { PlayerControllerService } from '../../services/player-controller.service';
import { NotifierService } from '../../notifier.service';

@Component({
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  constructor(
    private playerControllerService: PlayerControllerService,
    private notifierService: NotifierService
  ) { }

  ngOnInit() {
  }

  public onNotificationPreferenceChange($event: MouseEvent) {
    if (this.playerControllerService.playerSettings.hasPermissionToNotify) {
      this.notifierService.requestPermissionToNotify().then((canNotify: boolean) => {
        this.playerControllerService.playerSettings.hasPermissionToNotify = canNotify;
        if (canNotify) {
          this.notifierService.notify('Notifications Enabled!', '');
        }
      });
    }
  }

}
