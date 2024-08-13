import { Injectable } from '@angular/core';
import {    ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const token = sessionStorage.getItem('token');
    let role = localStorage.getItem('dataRole');
    if (!role) {
      this.router.navigate(['/login']);
      return false;
    }

    role = JSON.parse(role);
    const allowedRoles = next.data['allowedRoles'];
    // @ts-ignore
    // if (token && (allowedRoles.includes(role.role_name))) {
    if (token) {
      return true;
    } else {
      localStorage.clear();
      sessionStorage.clear();
      this.router.navigate(['/login']);
      return false;
    }
  }
}
