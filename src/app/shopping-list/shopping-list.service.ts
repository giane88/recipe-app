import {Ingredient} from '../model/ingredient.model';
import {EventEmitter} from '@angular/core';

export class ShoppingListService {

  ingridientChanged = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient [] = [
    new Ingredient('Test Ingredient 1', 100),
    new Ingredient('Test Ingredient 2', 200),
  ];

  getIngredient(): Ingredient[] {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingridientChanged.emit(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
   this.ingredients.push(...ingredients);
   this.ingridientChanged.emit(this.ingredients.slice());
  }
}
