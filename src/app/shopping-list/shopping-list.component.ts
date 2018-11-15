import {Component, OnInit} from '@angular/core';

import {Ingredient} from '../ingredient.model';

@Component({
             selector: 'app-shopping-list',
             templateUrl: './shopping-list.component.html',
             styleUrls: ['./shopping-list.component.css']
           })
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [];

  constructor() {
    this.ingredients = [
      new Ingredient('Test Ingredient 1', 100),
      new Ingredient('Test Ingredient 2', 200),
    ];
  }

  ngOnInit() {
  }

  addIngredientToList(addedIngredient: Ingredient) {
    this.ingredients.push(addedIngredient);
  }
}
