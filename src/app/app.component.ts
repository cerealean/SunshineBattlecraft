import { Component } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { PlayerControllerService } from './services/player-controller.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'Sunshine Battlecraft';

  get isAuthenticated(): boolean {
    return this.authService.isAuthenticated;
  }

  constructor(private authService: AuthenticationService, private playerControllerService: PlayerControllerService) {
    if (this.authService.isAuthenticated) {
      this.authService.scheduleRenewal();
    }
  }

  public login() {
    this.authService.login();
  }

  public killDataAndRestart() {
    this.playerControllerService.setupNewGame();
  }
}
