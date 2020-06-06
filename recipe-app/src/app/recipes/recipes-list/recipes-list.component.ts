import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../services/recipe.service';
import { Router, ActivatedRoute } from '@angular/router';
import { StorageService } from 'src/app/shopping-list/services/storage.service';

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
    private activeRoute:ActivatedRoute,
    private dataService: StorageService) { }
    loading:boolean = false;

  ngOnInit(): void {
    this.loading = true;

       this.dataService.fetchRecipes().subscribe(
        (data) =>{
          this.recipesList = data;
          this.recipeService.setRecipes(this.recipesList);
          this.loading = false;

        },(error) =>{
          console.log(error);
          this.loading = false;
        }
      )
    this.recipeService.recipesSubject.subscribe(
      (recipes) =>{
        this.recipesList = recipes;
      }
    )
  }
  onRecipeItemClicked(recipe:Recipe){
    this.recipeItemClickedEvent.emit(recipe);

  }
  onNewRecipe(){

    this.router.navigate(['/recipes/new']);
  }

}
