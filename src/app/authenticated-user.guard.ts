import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticatedUserGuard implements CanActivate {
  constructor(private authService: AuthenticationService){}
  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.isAuthenticated;
  }
}
