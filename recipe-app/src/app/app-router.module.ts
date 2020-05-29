import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeSelectComponent } from './recipes/recipe-select.component';
import { RecipesNewComponent } from './recipes/recipes-new/recipes-new.component';

const routes: Routes = [
    { path: '', redirectTo: '/recipes', pathMatch: 'full' },
    {
        path: 'recipes', component: RecipesComponent,
        children: [{ path: '', component: RecipeSelectComponent },
        { path: 'new', component: RecipesNewComponent },
        { path: ':id', component: RecipeDetailComponent },
        { path: ':id/edit', component: RecipesNewComponent }]
    },
    { path: 'shoppinglist', component: ShoppingListComponent },
    { path: '**', component: RecipesComponent }
]



@NgModule(
    {
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]

    }
)
export class AppRouterModule {

}