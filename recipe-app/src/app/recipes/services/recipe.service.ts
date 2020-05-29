import { Injectable, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
import { Ingredient } from 'src/app/shared/ingredients.model';
import { ShoppingService } from 'src/app/shopping-list/services/shopping.service';

@Injectable()
export class RecipeService{
    constructor(private shoppingServie:ShoppingService){

    }
   private recipesList : Recipe[] = [
        new Recipe("Donut cake",
        "Delicious cake for kids",
        "https://assets.epicurious.com/photos/5ae74741f8542520401e0da6/master/pass/giant-donut-cake-recipe-042718.jpg",
         [
            new Ingredient('bread',1),
            new Ingredient('cream',1)
         ]

        ),
        new Recipe("Kiwi Smoothie",
        "Soothing and cooling",
        "https://cdn2.foodviva.com/static-content/food-images/smoothie-recipes/banana-kiwi-smoothie-recipe/banana-kiwi-smoothie-recipe.jpg",
        [
            new Ingredient('milk',1),
        
            new Ingredient('cream',1)
         ]
        ),

        
        new Recipe("Manchow Soup",
        "Directly from HongKong",
        "https://i.ytimg.com/vi/6LcgITHArSE/maxresdefault.jpg",
        [
            new Ingredient('noodles',1),
            new Ingredient('sauce',1)
         ]

        ),
      ];

      @Output()selectedRecipe = new EventEmitter<Recipe>();

      getRecipes() : Recipe[]{
          return this.recipesList.slice();

      }

      onRecipeSelected(recipe: Recipe){
          this.selectedRecipe.emit(recipe)
      }

      addIngredientsToShoppingList(ingredients:Ingredient[]){
          this.shoppingServie.addIngredients(ingredients)

      }
      getRecipe(id:number):Recipe{
          return this.recipesList[id];
          
      }

}