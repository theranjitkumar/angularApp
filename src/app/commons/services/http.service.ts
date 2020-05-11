// import { Http, Headers, ConnectionBackend, Response, RequestOptionsArgs, Request, RequestOptions } from '@angular/http';
// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
// import { Router } from '@angular/router';
// import { LocalStorage } from './localStorage.service';
// // import { ToasterService } from 'angular2-toaster';

// @Injectable()
// export class HttpService extends Http {
//   constructor(backend: ConnectionBackend, defaultOptions: RequestOptions, private router: Router) {
//     super(backend, defaultOptions);
//   }

//   request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
//     return this.authInterceptor(super.request(url, this.appendAuthHeader(options)));
//   }

//   get(url: string, options?: RequestOptionsArgs): Observable<Response> {
//     return this.authInterceptor(super.get(url, this.appendAuthHeader(options)));
//   }

//   post(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
//     return this.authInterceptor(super.post(url, body, this.appendAuthHeader(options)));
//   }

//   put(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
//     return this.authInterceptor(super.put(url, body, this.appendAuthHeader(options)));
//   }

//   delete(url: string, options?: RequestOptionsArgs): Observable<Response> {
//     return this.authInterceptor(super.delete(url, this.appendAuthHeader(options)));
//   }

//   private appendAuthHeader(options?: RequestOptionsArgs): RequestOptionsArgs {
//     const mergedOptions: RequestOptionsArgs = Object.assign({ headers: new Headers() }, options);
//     const auth = LocalStorage.get('access_token');
//     if (auth) {
//       mergedOptions.headers.append('x-access-token', auth);
//       mergedOptions.headers.append('Content-Type', 'application/json');
//     } else {
//       mergedOptions.headers.append('Content-Type', 'application/json');
//     }
//     return mergedOptions;
//   }
//   private authInterceptor(observable: Observable<Response>): any {
//     // return observable.catch((error, source) => {
//     //   if (error.status === 401) {
//     //     LocalStorage.clear();
//     //     // this.toasterService.pop('error', 'Unauthorised User', '');
//     //     this.router.navigateByUrl('/login');
//     //     return Observable.throw(error);
//     //   } else {
//     //     return Observable.throw(error);
//     //   }
//     // });
//   }
// }
