import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../services/recipe.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

  recipesList : Recipe[];
  @Output() recipeItemClickedEvent = new EventEmitter<Recipe>();
  constructor(private recipeService: RecipeService,
    private router:Router,
    private activeRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.recipesList = this.recipeService.getRecipes();
  }
  onRecipeItemClicked(recipe:Recipe){
    this.recipeItemClickedEvent.emit(recipe);

  }
  onNewRecipe(){

    this.router.navigate(['/recipes/new']);
  }

}
