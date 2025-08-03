import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class InterceptorPaginationInterceptor implements HttpInterceptor {

   intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const number = '10';

    const updatedParams = req.params.set('number', number);
    const updatedRequest = req.clone({ params: updatedParams });

    return next.handle(updatedRequest);
  }
}
