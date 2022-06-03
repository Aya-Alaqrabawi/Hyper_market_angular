import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutherizationGuardGuard implements CanActivate {
 
 constructor(private router :Router,private toaster:ToastrService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
   const token =localStorage.getItem('token');
   if(token)
   {
   if(state.url.indexOf('admin')>=0)
   {
    let user :any = localStorage.getItem('user');
   if(user){
    user=JSON.parse(user); 
    if(user.role == '1')
    {
      this.toaster.success('Welcome in admin page')
      return true;
    }
    else {
    this.toaster.warning('This page for admin ..');
    return false;
    }
  }
 else{
    this.toaster.warning('You are not in database..');
    return false;
  }
}else if(state.url.indexOf('user')>=0){
  let user :any = localStorage.getItem('user');
  if(user){
   user=JSON.parse(user); 
   if(user.role == '2')
   {
     this.toaster.success('Welcome in user page')
     
     return true;
   }
   else {
   this.toaster.warning('This page for user ..');
   this.router.navigate(['auth/login']);
   return false;
   }
 }
else{
   this.toaster.warning('You are not in database..');
   return false;
 }

}
     return true;
   }
   else{
     this.router.navigate(['auth/login']);
     this.toaster.warning('please login !!');
     return false;
   }
    
  }
  
}
