import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

// import { constant } from '../config/constant';
import { environment } from '../../../environments/environment';

export interface IRequestOptions {
    headers?: HttpHeaders;
    observe?: 'body';
    params?: HttpParams;
    reportProgress?: boolean;
    responseType?: 'json';
    withCredentials?: boolean;
    body?: any;
}

export function appHttpClientCreator(http: HttpClient) {
    return new AppHttpClient(http);
}

@Injectable({
    providedIn: 'root'
})
export class AppHttpClient {

    private api = environment.baseUrl;

    public constructor(public http: HttpClient) {

    }

    public Get<T>(endPoint: string, options?: IRequestOptions): Observable<T> {
        return this.http.get<T>(this.api + endPoint, options);
    }

    public Post<T>(endPoint: string, params: Object, options?: IRequestOptions): Observable<T> {
        return this.http.post<T>(this.api + endPoint, params, options);
    }

    public Put<T>(endPoint: string, params: Object, options?: IRequestOptions): Observable<T> {
        return this.http.put<T>(this.api + endPoint, params, options);
    }

    public Delete<T>(endPoint: string, options?: IRequestOptions): Observable<T> {
        return this.http.delete<T>(this.api + endPoint, options);
    }
}
