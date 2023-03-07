import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './services/login.service';

@Injectable({
  providedIn: 'root'
})
export class BlockloginGuard implements CanActivate {
  constructor(private authservice:LoginService,private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      if (!this.authservice.getToken())
      return true;
    else {
      this.router.navigate([(localStorage.getItem('route')!)]);
      return false;
    }
  }
  
}
