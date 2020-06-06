import { NgModule } from '@angular/core';
import { ShoppingListComponent } from './shopping-list.component';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';

import { FormsModule } from '@angular/forms';
import { ShoppingRouterModule } from './shopping.router.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
        ShoppingListComponent,
        ShoppingEditComponent
    ],
    imports: [
        FormsModule,
        ShoppingRouterModule,
        SharedModule
    ]
})
export class ShoppingModule {

}