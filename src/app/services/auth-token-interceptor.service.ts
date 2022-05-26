import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthTokenReqHeaderInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const token = window.localStorage.getItem('token') || '';

    if (token) {
      const cloned = request.clone({
        setHeaders: {
          authorization: token,
        },
      });
      return next.handle(cloned);
    } else {
      return next.handle(request);
    }
  }
}
