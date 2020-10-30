import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpHeaders
} from '@angular/common/http';
import {Observable} from 'rxjs';
import { environment } from './../environments/environment';

@Injectable()
export class DefaultInterceptor implements HttpInterceptor {

  formDataEndpoints = ['product'];

  constructor() {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const formDataHeader = new HttpHeaders();
    const jsonHeader = new HttpHeaders({'Content-type': 'application/json'});
    request = request.clone({
      withCredentials: true,
      headers: this.formDataEndpoints.includes(request.url) ? formDataHeader : jsonHeader,
      url: `${environment.apiServer}${request.url}`
    });
    console.log(request);
    return next.handle(request);
  }
}
