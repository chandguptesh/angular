import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService, AuthResponse } from './auth.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html'
})
export class AuthComponent {
    isLoginMode: boolean = false;
    isLoading: boolean = false;
    error: string = null;
    success: string = null;
    authObservable: Observable<AuthResponse>;

    constructor(private authService: AuthService,
        private router:Router) { }

    switchMode() {
        this.isLoginMode = !this.isLoginMode;
    }
    onSumbit(authForm: NgForm) {
        const email = authForm.value.email;
        const password = authForm.value.password;
        this.isLoading = true;
        this.error = null;
        this.success = null;
        if (this.isLoginMode) {

            this.authObservable = this.authService.signIn(email, password);

        }
        else {


            this.authObservable = this.authService.signUp(email, password)
        }
        this.authObservable.subscribe(
            (authdata) => {
                console.log(authdata);
                this.isLoading = false;
                this.success = 'success for ' + email;
                this.router.navigate(['/recipes']);
            }, (error) => {
                console.log('error occured');
                this.error = error;
                this.isLoading = false;
            }
        )

        authForm.reset();

    }
    onCloseEvent(){
        this.error = null;
    }

}