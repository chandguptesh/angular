import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipesListComponent } from './recipes/recipes-list/recipes-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipes/recipes-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { BasicHighlightDirective } from './directive/basic-highlight.directive';
import { BetterHighlightDirective } from './directive/better-highlight.directive';
import { DropdownToggleDirective } from './directive/dropdown-toggle.directive';
import { AppRouterModule } from './app-router.module';
import { RecipeSelectComponent } from './recipes/recipe-select.component';
import { RecipesNewComponent } from './recipes/recipes-new/recipes-new.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipesListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    DropdownToggleDirective,
    RecipeSelectComponent,
    RecipesNewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRouterModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
