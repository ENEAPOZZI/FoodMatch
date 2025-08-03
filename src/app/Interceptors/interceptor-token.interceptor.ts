import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class InterceptorTokenInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const apiKey = '7fc5fcd5fee843fab017cbc67d0aeb2e';

    const updatedParams = req.params.set('apiKey', apiKey);
    const updatedRequest = req.clone({ params: updatedParams });

    return next.handle(updatedRequest);
  }
}
