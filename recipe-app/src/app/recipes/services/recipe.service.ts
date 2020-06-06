import { Injectable, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
import { Ingredient } from 'src/app/shared/ingredients.model';
import { ShoppingService } from 'src/app/shopping-list/services/shopping.service';
import { Subject } from 'rxjs';
import { StorageService } from 'src/app/shopping-list/services/storage.service';

@Injectable(
    {
        providedIn: 'root'
    }
)
export class RecipeService {
    recipesSubject = new Subject<Recipe[]>();
    constructor(private shoppingServie: ShoppingService
        ) {

    }
    

    recipesList: Recipe[] = [];

    
  

    setRecipes(recipes: Recipe[]) {
        this.recipesList = recipes;
        this.publishRecipes(recipes);
    }

    publishRecipes(recipes: Recipe[]) {
        this.recipesSubject.next(recipes);
    }



    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingServie.addIngredients(ingredients)

    }
    getRecipe(id: number): Recipe {
        return this.recipesList[id];

    }
    getRecipes(){
        return this.recipesList;
    }

}