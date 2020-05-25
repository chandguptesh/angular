import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredients.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  constructor() { }
  @ViewChild("InputName",{static:false}) inputName:ElementRef;
  @ViewChild("InputAmount", {static:false}) inputAmount: ElementRef;

  @Output() addEvent = new EventEmitter<Ingredient>();

  ngOnInit(): void {
  }
  onAdd(){
    const ingredient = new Ingredient(this.inputName.nativeElement.value, this.inputAmount.nativeElement.value);
    this.addEvent.emit(ingredient);

  }

}
