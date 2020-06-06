import { Resolve } from '@angular/router';
import { Recipe } from './recipe.model';
import { StorageService } from '../shopping-list/services/storage.service';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn:'root'
})
export class RecipesResolverService implements Resolve<Recipe[]>{

    constructor(private service: StorageService){}
    resolve(route: import("@angular/router").ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot): Recipe[] | import("rxjs").Observable<Recipe[]> | Promise<Recipe[]> {
        
        return this.service.fetchRecipes();
    }
    
}