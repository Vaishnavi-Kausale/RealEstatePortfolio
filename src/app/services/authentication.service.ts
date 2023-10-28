import { Injectable } from '@angular/core';
import { Router, UrlTree, CanActivateChildFn } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private router:Router) {}
  CanActivateChildFn(): boolean | UrlTree {
    const loginStatus =localStorage.getItem("login")

     if(loginStatus == '1')
      return true;
     else
     return this.router.createUrlTree(['login']);
  }
}
