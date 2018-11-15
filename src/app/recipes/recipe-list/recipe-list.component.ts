import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
             selector: 'app-recipe-list',
             templateUrl: './recipe-list.component.html',
             styleUrls: ['./recipe-list.component.css']
           })
export class RecipeListComponent implements OnInit {
  @Output('selectedRecipe') selectedRecipeEmitter = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('A test Recipe1', 'This is a simple test recipe for 1',
               'https://c.pxhere.com/photos/8b/0f/food_meat_recipe_power_pork_dishes-604134.jpg!d'),
    new Recipe('A test Recipe2', 'This is a simple test recipe for 2',
               'https://c.pxhere.com/photos/8b/0f/food_meat_recipe_power_pork_dishes-604134.jpg!d')
  ];

  constructor() {
  }

  ngOnInit() {
  }

  onItemSelect(recipe: Recipe) {
    this.selectedRecipeEmitter.emit(recipe);
  }

}
