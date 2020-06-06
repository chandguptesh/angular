import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { StorageService } from '../shopping-list/services/storage.service';
import { ShoppingService } from '../shopping-list/services/shopping.service';
import { RecipeService } from '../recipes/services/recipe.service';
import { AuthService } from '../auth/auth.service';

@Component({
    selector:'app-header',
    templateUrl:'header.component.html'
})
export class HeaderComponent implements OnInit{
    title:string = "I'm header";
    isAuthenticated:boolean = false;

    constructor(private service:RecipeService,
        private dataService:StorageService,
        private authService:AuthService){}

      ngOnInit(){
          this.authService.userSubject.subscribe(
              (user) =>{
                  this.isAuthenticated = !user ? false : true;
              }
          )
      }
    
    onSave(){
        this.dataService.saveRecipes();

    }
    onFetch(){
        this.dataService.fetchRecipes().subscribe(
            (data) =>{
                this.service.setRecipes(data);
            }
        );
    }
    onLogOut(){
        this.authService.logOut();

    }

}