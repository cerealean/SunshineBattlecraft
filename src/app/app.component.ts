import { Component } from '@angular/core';
import { AuthenticationService } from './authentication.service';

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

  constructor(private authService: AuthenticationService){}

  public login() {
    this.authService.login();
  }
}
