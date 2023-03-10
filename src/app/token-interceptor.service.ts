import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginService } from './services/login.service';


@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private authService:LoginService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const g = "/login";
    if(request.url.search(g) === -1){
      let jwt = this.authService.getToken();
    let reqWithToken = request.clone( {
    setHeaders: { Authorization : "Bearer "+jwt}
    
    }
    )

    return next.handle(reqWithToken);
   
    }
    return next.handle(request);
  }
}

