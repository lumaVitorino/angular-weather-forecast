import { Injector } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export class BaseService {

    protected httpOptions: {};
    protected http: HttpClient;

    constructor(injector: Injector) {
        this.http = injector.get<HttpClient>(HttpClient);
        this.httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            })
        };
    }
    
    protected buildQueryParameters(paramenterName: string, paramenterValue: any): string {
        if (!paramenterValue || paramenterValue == null || paramenterValue == ''
            || !paramenterName || paramenterName === '') {
            return '';
        }
        return `${paramenterName}=${paramenterValue}`;
    }

    protected get<T>(url: string, options?: object): Observable<T> {
        return this.handleResponse(this.http.get<T>(url, options || this.httpOptions));
    }

    protected post<T>(url: string, body: any, options?: object): Observable<T> {
        return this.handleResponse(this.http.post<T>(url, body, options || this.httpOptions));
    }

    protected put<T>(url: string, body: any, options?: object): Observable<T> {
        return this.handleResponse(this.http.put<T>(url, body, options || this.httpOptions));
    }
    protected delete<T>(url: string, options?: object): Observable<T> {
       return this.handleResponse(this.http.delete<T>(url, options || this.httpOptions));
    }

    protected handleResponse<T>(response: Observable<T>): Observable<T> {
        return response;
    }

}
