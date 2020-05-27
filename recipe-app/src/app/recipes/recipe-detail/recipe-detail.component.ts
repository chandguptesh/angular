import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  constructor(private recipeServie: RecipeService) { }
  @Input()recipeDetail:Recipe;

  ngOnInit(): void {
  }

  onShoppingClick(){
    this.recipeServie.addIngredientsToShoppingList(this.recipeDetail.ingredients);

  }

}
