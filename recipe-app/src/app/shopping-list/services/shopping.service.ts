import { Injectable, EventEmitter, Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredients.model';


@Injectable({providedIn:"root"})
export class ShoppingService{
    
    @Output() ingredientsAddedEvent = new EventEmitter<Ingredient[]>();
    ingredients: Ingredient[]= [
        new Ingredient("Apples", 5),
        new Ingredient("Tomato", 10)
      ];

      getIngredients(): Ingredient[]{
          return this.ingredients.slice();

      }

      addIngredient(ingredient:Ingredient){
          this.ingredients.push(ingredient);
          this.ingredientsAddedEvent.emit(this.ingredients.slice())

      }

      addIngredients(ingredients: Ingredient[]) {
        this.ingredients.push(... ingredients);
        this.ingredientsAddedEvent.emit(this.ingredients.slice())
    }

}