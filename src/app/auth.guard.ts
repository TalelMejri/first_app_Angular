import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable,tap } from 'rxjs';
import { Store } from '@ngxs/store';
import { AuthServiceService } from './services/auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private store:Store,private router:Router,private AuthServiceService:AuthServiceService){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.AuthServiceService.isLoggedIn$.pipe(
        tap((IsLogedTest)=>{
          if(!IsLogedTest){
            this.router.navigate(['login']);
          }
        })
      )
  }
}
