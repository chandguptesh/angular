import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesComponent } from './recipes.component';
import { AuthGuardService } from '../auth/auth.guard';
import { RecipeSelectComponent } from './recipe-select.component';
import { RecipesNewComponent } from './recipes-new/recipes-new.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipesResolverService } from './recipes.resolver.service';


const routes:Routes = [
    {
        path: '', component: RecipesComponent, canActivate:[AuthGuardService],
        children: [{ path: '', component: RecipeSelectComponent },
        { path: 'new', component: RecipesNewComponent },
        { path: ':id', component: RecipeDetailComponent, resolve:[RecipesResolverService] },
        { path: ':id/edit', component: RecipesNewComponent, resolve:[RecipesResolverService]}]
    },
    { path: '**', component: RecipesComponent }

]
@NgModule(
    {
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]

    }
)
export class RecipesRouterModule{

}