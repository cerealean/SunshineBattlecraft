import { Component, OnInit } from '@angular/core';
import { NotifierService } from '../../notifier.service';
import { PlayerSettingsService } from '../../player-settings.service';

@Component({
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  constructor(
    private playerSettingsService: PlayerSettingsService,
    private notifierService: NotifierService
  ) { }

  ngOnInit() {
  }

  public onNotificationPreferenceChange($event: MouseEvent) {
    if (this.playerSettingsService.notificationsEnabled) {
      this.notifierService.requestPermissionToNotify().then((canNotify: boolean) => {
        this.playerSettingsService.notificationsEnabled = canNotify;
        if (canNotify) {
          this.notifierService.notify('Notifications Enabled!', '');
        }
      });
    }
  }

}