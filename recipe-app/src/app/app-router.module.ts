import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';


const routes: Routes = [
    { path: '', redirectTo: '/auth', pathMatch: 'full' }, 
    //{ path: 'auth', component: AuthComponent },
    { path: 'recipes', loadChildren:() => import('././recipes/recipes.module').then((result) => result.RecipesModule ) },
    { path: 'shoppinglist', loadChildren:() => import('././shopping-list/shopping.module').then((result) => result.ShoppingModule) },
    { path: 'auth', loadChildren:() => import('././auth/auth.module').then((result) => result.AuthModule) }
    
]



@NgModule(
    {
        imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
        exports: [RouterModule]

    }
)
export class AppRouterModule {

}