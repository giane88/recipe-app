import {Recipe} from './recipe.model';
import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from '../model/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Cotoletta alla milanese',
               'Ricetta cotoletta alla milanese',
               'https://staticfanpage.akamaized.net/wp-content/uploads/sites/21/2018/11/cotoletta-alla-milanese-638x425.jpg',
               [
                 new Ingredient('Carne', 1),
                 new Ingredient('Patatine', 100)
               ]),
    new Recipe('Double Hamburger',
               'Ricetta double hamburger',
               'https://cdn.shopify.com/s/files/1/2170/3719/products/Double_Hamburger_-_Sandwich_Only_1024x1024@2x.png?v=1515626065',
               [
                 new Ingredient('Pane', 1),
                 new Ingredient('Hamburger', 2)
               ])
  ];

  constructor(private slService: ShoppingListService) {
  }

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
