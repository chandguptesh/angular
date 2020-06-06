import { NgModule } from '@angular/core';
import { RecipesComponent } from './recipes.component';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipes-list/recipe-item/recipe-item.component';
import { RecipeSelectComponent } from './recipe-select.component';
import { RecipesNewComponent } from './recipes-new/recipes-new.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RecipesRouterModule } from './recipes.router.module';
import { SharedModule } from '../shared/shared.module';


@NgModule(
    {
        declarations: [
            RecipesComponent,
            RecipesListComponent,
            RecipeDetailComponent,
            RecipeItemComponent,
            RecipeSelectComponent,
            RecipesNewComponent


        ],


        imports: [
            RouterModule,
            FormsModule,
            RecipesRouterModule,
            SharedModule

        ]
    }
)
export class RecipesModule {

}