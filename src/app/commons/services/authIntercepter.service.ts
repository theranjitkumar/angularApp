import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpResponse, HttpErrorResponse, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import {LocalStorage} from './localStorage.service'

@Injectable({
  providedIn: 'root'
})
export class AuthInterCepterService implements HttpInterceptor {

  token: string;

  constructor() {
    this.token = LocalStorage.get('token');
    console.log(this.token);
    
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    if (this.token) {
      req = req.clone({ headers: req.headers.set('Authorization', 'Bearer ' + this.token) });
    }

    if (!req.headers.has('Content-Type')) {
      req = req.clone({ headers: req.headers.set('Content-Type', 'application/json') });
    }

    req = req.clone({ headers: req.headers.set('Accept', 'application/json') });

    return next.handle(req).
    pipe( map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          if(event.status === 200)
          console.log('Res Event:', event);
        }
        return event;
      }));

    // throw new Error("Method not implemented.");
  }

}
