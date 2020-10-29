import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class DefaultInterceptor implements HttpInterceptor {

  formDataEndpoints = ['product'];

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const formDataHeader = new HttpHeaders();
    const jsonHeader = new HttpHeaders({'Content-type': 'application/json'});
    request = request.clone({
      withCredentials: true,
      headers: this.formDataEndpoints.includes(request.url) ? formDataHeader : jsonHeader,
      url: `http://localhost:3000/api/${request.url}`
    });
    return next.handle(request);
  }
}
