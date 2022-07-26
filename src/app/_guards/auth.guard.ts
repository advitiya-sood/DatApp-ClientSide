import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AlertifyService } from '../_services/Alertify.service';
import { AuthService } from '../_services/Auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private alertify:AlertifyService, private router:Router){}

  canActivate(): boolean{
    if (this.authService.loggedIn()){
      return true;
    }
    this.alertify.error("UnAutherised Access");
    this.router.navigate(['/home']);
    return false;
  }
}
