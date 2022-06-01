import {Component, OnDestroy, OnInit} from '@angular/core';

import {Ingredient} from '../model/ingredient.model';
import {LoggingService} from '../services/logging.service';
import {ShoppingListService} from './shopping-list.service';
import {Subscription} from 'rxjs';

@Component({
             selector: 'app-shopping-list',
             templateUrl: './shopping-list.component.html',
             styleUrls: ['./shopping-list.component.css'],
             providers: [LoggingService]
           })
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[] = [];
  private subscription!: Subscription;

  constructor(private logginService: LoggingService, private shoppingListService: ShoppingListService) {
  }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredient();
    this.subscription = this.shoppingListService.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) => this.ingredients = ingredients
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
