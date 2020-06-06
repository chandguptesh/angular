import { Injectable } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredients.model';
import { Subject } from 'rxjs';


@Injectable({providedIn:"root"})
export class ShoppingService{
  getIngredient(editIndex: number): Ingredient {
    return this.ingredients[editIndex];
  }
    
    ingredientsAddedEvent = new Subject<Ingredient[]>();
    ingredientsEditSubject = new Subject<number>();
    ingredients: Ingredient[]= [
        new Ingredient("Apples", 5),
        new Ingredient("Tomato", 10)
      ];

      getIngredients(): Ingredient[]{
          return this.ingredients.slice();

      }

      addIngredient(ingredient:Ingredient){
          this.ingredients.push(ingredient);
          this.ingredientsAddedEvent.next(this.ingredients.slice())

      }
      editIngredient(index:number, ingredient:Ingredient){
        this.ingredients[index] = ingredient;
        this.ingredientsAddedEvent.next(this.ingredients.slice());
      }

      addIngredients(ingredients: Ingredient[]) {
        this.ingredients.push(... ingredients);
        this.ingredientsAddedEvent.next(this.ingredients.slice());
    }
    onIngredientsEdit(index:number){
        this.ingredientsEditSubject.next(index);
    }
    deleteIngredients(index:number){
      this.ingredients.splice(index,1);
      this.ingredientsAddedEvent.next(this.ingredients.slice());
  }


}