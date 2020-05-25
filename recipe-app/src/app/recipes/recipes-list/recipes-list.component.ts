import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

  recipesList : Recipe[] = [
    new Recipe("Donut cake","Delicious cake for kids","https://assets.epicurious.com/photos/5ae74741f8542520401e0da6/master/pass/giant-donut-cake-recipe-042718.jpg"),
    new Recipe("Kiwi Smoothie","Soothing and cooling","https://cdn2.foodviva.com/static-content/food-images/smoothie-recipes/banana-kiwi-smoothie-recipe/banana-kiwi-smoothie-recipe.jpg"),
    new Recipe("Manchow Soup","Directly from HongKong","https://i.ytimg.com/vi/6LcgITHArSE/maxresdefault.jpg"),
  ];
  @Output() recipeItemClickedEvent = new EventEmitter<Recipe>();
  constructor() { }

  ngOnInit(): void {
  }
  onRecipeItemClicked(recipe:Recipe){
    this.recipeItemClickedEvent.emit(recipe);

  }

}
