import { Component, OnInit } from '@angular/core';
import { NotifierService } from '../../notifier.service';
import { PlayerSettingsService } from '../../player-settings.service';
import { AuthenticationService } from '../../authentication.service';

@Component({
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  private userProfile;

  constructor(
    private playerSettingsService: PlayerSettingsService,
    private notifierService: NotifierService,
    private authService: AuthenticationService
  ) { }

  ngOnInit() {
    this.authService.getProfile().then((profile) => {
      this.userProfile = profile;
      console.log(this.userProfile);
    }, (error) => {
      alert('An error occurred trying to fetch your user profile');
      console.error(error);
    });
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
