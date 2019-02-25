import {Component, OnInit} from '@angular/core';

import {Ingredient} from '../model/ingredient.model';
import {LoggingService} from '../services/logging.service';
import {ShoppingListService} from './shopping-list.service';

@Component({
             selector: 'app-shopping-list',
             templateUrl: './shopping-list.component.html',
             styleUrls: ['./shopping-list.component.css'],
             providers: [LoggingService]
           })
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [];

  constructor(private logginService: LoggingService, private shoppingListService: ShoppingListService) {
  }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredient();
    this.shoppingListService.ingridientChanged.subscribe(
      (ingridients: Ingredient[]) => this.ingredients = ingridients
    );
  }
}
