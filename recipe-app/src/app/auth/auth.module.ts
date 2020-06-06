import { NgModule } from '@angular/core';
import { AuthComponent } from './auth.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { AuthRouterModule } from './auth.router.module';

@NgModule(
    {
        declarations:[AuthComponent],
        imports:[FormsModule,CommonModule,SharedModule,AuthRouterModule]
    }
)
export class AuthModule{

}