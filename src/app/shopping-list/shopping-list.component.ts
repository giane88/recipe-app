import {Component, OnInit} from '@angular/core';

import {Ingredient} from '../model/ingredient.model';
import {LoggingService} from '../services/logging.service';

@Component({
             selector: 'app-shopping-list',
             templateUrl: './shopping-list.component.html',
             styleUrls: ['./shopping-list.component.css'],
             providers: [LoggingService]
           })
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [];

  constructor(private logginService: LoggingService) {
    this.ingredients = [
      new Ingredient('Test Ingredient 1', 100),
      new Ingredient('Test Ingredient 2', 200),
    ];
  }

  ngOnInit() {
  }

  addIngredientToList(addedIngredient: Ingredient) {
    this.ingredients.push(addedIngredient);
    this.logginService.logMessage(`Ingredient added: ${addedIngredient.name}`);
  }
}
