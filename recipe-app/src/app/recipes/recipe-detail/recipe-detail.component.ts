import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../services/recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipeId:number;

  constructor(private recipeService: RecipeService,
    private activeRoute:ActivatedRoute,
    private router:Router) { }
  recipeDetail:Recipe;

  ngOnInit(): void {
    this.activeRoute.params.subscribe(
      (params:Params) =>{
        this.recipeId = +params['id'];
        this.recipeDetail = this.recipeService.getRecipe(this.recipeId);

      }
    )
    
  }

  onShoppingClick(){
    this.recipeService.addIngredientsToShoppingList(this.recipeDetail.ingredients);

  }
  onEditRecipe(){
    this.router.navigate(['/recipes',this.recipeId,'edit'])

  }

}
