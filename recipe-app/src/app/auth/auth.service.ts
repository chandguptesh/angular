import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { throwError, Subject, BehaviorSubject } from 'rxjs';
import { User } from './user.model';
import { Router } from '@angular/router';

export interface AuthResponse {
    idToken: string,
    email: string,
    refreshToken: string,
    expiresIn: string,
    localId: string,
    registered?:boolean
}

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    constructor(private http: HttpClient,
        private router:Router) { }
    userSubject = new BehaviorSubject<User>(null);
    logoutTimer:any;

    signIn(email:string, password:string){
        return this.http.post<AuthResponse>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBkGSxutjy8xcR35y7r_p1zjqHiTvZzDGQ',
        {
            email: email,
            password: password,
            returnSecureToken: true
        }
        ).pipe(tap(
            (resData) =>{
                this.createUser(resData.email,resData.localId, resData.idToken, resData.expiresIn);
                
            }
        ),
            catchError(this.handleError))
    }
    autoLogin(){
       let user = localStorage.getItem('userData');
       if(!user){
           return;
       }
       else{
           let userObj = JSON.parse(user);
           let loadedUser = new User(userObj.email,userObj.id,userObj._token, new Date(userObj.expirationDate));
           if(loadedUser.token){
               this.userSubject.next(loadedUser);
               let expirationtime = loadedUser.expirationDate.getTime() - new Date().getTime();
               this.autoLogOut(expirationtime);
           }
           else{
               return;
           }
       }
    }
    logOut(){
        this.userSubject.next(null);
        localStorage.removeItem('userData');
        this.router.navigate(['/auth']);
        if(this.logoutTimer){
           clearTimeout(this.logoutTimer);
        }
        this.logoutTimer = null;
    }

    autoLogOut(expirationMs: number){
       this.logoutTimer =  setTimeout(() =>{
            this.logOut();
        },expirationMs)
    }

    signUp(email: string, password: string) {
        return this.http.post<AuthResponse>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBkGSxutjy8xcR35y7r_p1zjqHiTvZzDGQ',
            {
                email: email,
                password: password,
                returnSecureToken: true
            }).pipe(tap(
                (resData) =>{
                    this.createUser(resData.email,resData.localId, resData.idToken, resData.expiresIn);
                }
            ),
                catchError(this.handleError)
                
            )
                
            
    }
    private createUser(email:string,id:string,token:string, expiresIn:string){
        const expirationDate = new Date(new Date().getTime() + +expiresIn*1000);
        const user = new User(email, id,token,expirationDate);
        this.userSubject.next(user);
        localStorage.setItem('userData', JSON.stringify(user))
        this.autoLogOut(+expiresIn* 1000);

    }
    private handleError(errorResponse:HttpErrorResponse){
        let errorMessage = "Unknown error occured";
                    if(!errorResponse.error.error){
                        return throwError(errorMessage);
                    }
                    switch(errorResponse.error.error.message){
                        case 'EMAIL_EXISTS':
                            errorMessage = 'Email already exists';
                            break;
                        case 'EMAIL_NOT_FOUND':
                            errorMessage = 'email not registered';
                            break;
                        case 'INVALID_PASSWORD':
                            errorMessage = 'incorrect password';
                            break;
                    }
                    return throwError(errorMessage);

    }

}