import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { Recipe } from 'src/app/recipes/recipe.model';
import { tap, take, exhaustMap } from 'rxjs/operators';
import { RecipeService } from 'src/app/recipes/services/recipe.service';
import { AuthService } from 'src/app/auth/auth.service';


@Injectable({ providedIn: 'root' })
export class StorageService {
    constructor(private http: HttpClient,
        private service: RecipeService,
        private authService: AuthService

    ) { }



    saveRecipes() {
        let recipes = this.service.getRecipes();

        this.http.put('https://angular-52c03.firebaseio.com/recipes.json', recipes).
            subscribe((data) => {
                console.log(data);
            }
            )
    }

    fetchRecipes() {
       
        return this.http.get<Recipe[]>('https://angular-52c03.firebaseio.com/recipes.json').pipe(tap(
            (data) =>{
                this.service.setRecipes(data)
            }
        ))



    }



}