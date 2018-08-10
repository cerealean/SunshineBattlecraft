import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as auth0 from 'auth0-js';
import { of, timer } from '../../node_modules/rxjs';
import { mergeMap } from '../../node_modules/rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private auth0 = new auth0.WebAuth({
    clientID: 'iQ1SZRhx7yD4WMUd7YGHzm1dHSNCWdp7',
    domain: 'sunshine-battlecraft.auth0.com',
    responseType: 'token id_token',
    audience: 'https://sunshine-battlecraft.auth0.com/userinfo',
    redirectUri: 'http://localhost:4200/callback',
    scope: 'openid'
  });
  private userProfile: any;
  private refreshSub: any;

  get isAuthenticated(): boolean {
    const expiresAt = JSON.parse(localStorage.getItem('expires_at') || '{}');
    return new Date().getTime() < expiresAt;
  }

  constructor(public router: Router) { }

  public login(): void {
    this.auth0.authorize();
  }

  public handleAuthentication(): void {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        window.location.hash = '';
        this.setSession(authResult);
        this.router.navigate(['/']);
      } else if (err) {
        this.router.navigate(['/']);
        console.error(err);
      }
    });
  }

  public userHasScopes(scopes: Array<string>): boolean {
    const grantedScopes = JSON.parse(localStorage.getItem('scopes')).split(' ');
    return scopes.every(scope => grantedScopes.includes(scope));
  }

  public renewToken() {
    this.auth0.checkSession({}, (err, result) => {
      if (err) {
        console.log(err);
        this.router.navigate(['/']);
      } else {
        this.setSession(result);
      }
    });
  }

  public logout(): void {
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    localStorage.removeItem('scope');
    this.unscheduleRenewal();
    this.router.navigate(['/']);
  }

  public async getProfile(): Promise<any> {
    const self = this;
    return new Promise((resolve, reject) => {
      const accessToken = localStorage.getItem('access_token');
      if (!accessToken) {
        reject('Access Token must exist to fetch profile');
      }
      if (self.userProfile) {
        resolve(self.userProfile);
      } else {
        this.auth0.client.userInfo(accessToken, (err, profile) => {
          if (profile) {
            self.userProfile = profile;
            resolve(profile);
          }
          reject(err);
        });
      }
    });
  }

  public scheduleRenewal() {
    if (!this.isAuthenticated) { return; }
    this.unscheduleRenewal();
    const expiresAt = JSON.parse(window.localStorage.getItem('expires_at'));
    const expiresIn$ = of(expiresAt).pipe(
      mergeMap(
        expiresAt => {
          return timer(Math.max(1, expiresAt - Date.now()));
        }
      )
    );

    // Once the delay time from above is
    // reached, get a new JWT and schedule
    // additional refreshes
    this.refreshSub = expiresIn$.subscribe(
      () => {
        this.renewToken();
        this.scheduleRenewal();
      }
    );
  }

  public unscheduleRenewal() {
    if (this.refreshSub) {
      this.refreshSub.unsubscribe();
    }
  }

  private setSession(authResult): void {
    const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
    localStorage.setItem('scope', authResult.scope || '');
    this.scheduleRenewal();
  }
}
