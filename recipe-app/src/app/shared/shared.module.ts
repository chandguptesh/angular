import { NgModule } from '@angular/core';
import { SpinnerComponent } from './spinner.component';
import { AlertComponent } from './alert/alert.component';
import { DropdownToggleDirective } from '../directive/dropdown-toggle.directive';
import { CommonModule } from '@angular/common';

@NgModule(
    {
        declarations: [
            SpinnerComponent,
            AlertComponent,
            DropdownToggleDirective
        ],
        imports:[
            CommonModule
        ],
        exports:[
            CommonModule,
            SpinnerComponent,
            AlertComponent,
            DropdownToggleDirective
        ]
    }
)
export class SharedModule {

}