import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { EncDecService } from '@ecom/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanLoad {

  constructor(private encService: EncDecService, private router: Router) {}

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(sessionStorage.getItem('role') != null) {
        const role = this.encService.decrypt(sessionStorage.getItem('role')!, '');
        if (role === 'User'){
          return true;
        } else {
          return false;
        }
      } else {
        return false;
      }

  }

  navigateToLogin(state : RouterStateSnapshot){
    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    return false;
  }
}
