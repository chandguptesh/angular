import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

  recipesList : Recipe[];
  @Output() recipeItemClickedEvent = new EventEmitter<Recipe>();
  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.recipesList = this.recipeService.getRecipes();
  }
  onRecipeItemClicked(recipe:Recipe){
    this.recipeItemClickedEvent.emit(recipe);

  }

}
