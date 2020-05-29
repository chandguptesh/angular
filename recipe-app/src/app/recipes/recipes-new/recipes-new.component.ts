import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipes-new',
  templateUrl: './recipes-new.component.html',
  styleUrls: ['./recipes-new.component.css']
})
export class RecipesNewComponent implements OnInit {
  recipeId: number;
  isEditMode:boolean;

  constructor(private activeRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(
      (params:Params) =>{
        this.recipeId = params['id'];
        this.isEditMode = params['id'] != null
      }
    )
    
  }

}
