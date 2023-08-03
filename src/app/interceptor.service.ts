import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Store } from '@ngxs/store';
@Injectable({
  providedIn: 'root'
})

export class YourInterceptor implements HttpInterceptor {

   constructor(private store:Store) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    var authstate=this.store.selectSnapshot(state=>state.AuthStore?.token)
    let tokenReq=req.clone({
      setHeaders:{
        Authorization:`Bearer ${authstate}`
      }
    })
    return next.handle(tokenReq);
  }

}

