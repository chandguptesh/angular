import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output, OnDestroy } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredients.model';
import { ShoppingService } from '../services/shopping.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f', { static: true }) editForm: NgForm;
  editIndex: number;
  editMode: boolean = false;
  editedIngredient: Ingredient;
  myeditSubscription: Subscription;

  constructor(private shoppingService: ShoppingService) { }
  ngOnDestroy(): void {
    this.myeditSubscription.unsubscribe();
  }



  ngOnInit(): void {
    this.myeditSubscription = this.shoppingService.ingredientsEditSubject.subscribe(
      (index: number) => {
        this.editMode = true;
        this.editIndex = index;
        this.editedIngredient = this.shoppingService.getIngredient(this.editIndex);
        this.editForm.setValue(
          {
            name: this.editedIngredient.name,
            amount: this.editedIngredient.amount
          }
        )
      }
    )
  }
  onSubmit(form: NgForm) {
    const value = form.value;
    const ingredient = new Ingredient(value.name, value.amount);
    if (this.editMode) {
      this.shoppingService.editIngredient(this.editIndex, ingredient)
    }
    else {
      this.shoppingService.addIngredient(ingredient);
    }
    this.editMode = false;
    this.editForm.reset();
  }
  onClear(){
    this.editMode = false;
    this.editForm.reset();
  }
  onDelete(){
    this.shoppingService.deleteIngredients(this.editIndex);
    this.editForm.reset();
    this.editMode = false;
  }

}
