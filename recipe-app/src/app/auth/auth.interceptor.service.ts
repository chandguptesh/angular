import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { take, exhaustMap } from 'rxjs/operators';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor{

    constructor(private authService:AuthService){}
    intercept(req: HttpRequest<any>, next:HttpHandler) {

        return this.authService.userSubject.pipe(take(1), exhaustMap(
            (user) =>{
                if(user){
                const token = user.token;
                let modifiedRequest = req.clone({params: new HttpParams().set('auth', token)})
                return next.handle(modifiedRequest);
                }
                else{
                    return next.handle(req);
                }

            }
        ))
        
    }


}