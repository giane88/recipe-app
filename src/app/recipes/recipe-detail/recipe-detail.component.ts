import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';
import {RecipeService} from '../recipe.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
             selector: 'app-recipe-detail',
             templateUrl: './recipe-detail.component.html',
             styleUrls: ['./recipe-detail.component.css']
           })
export class RecipeDetailComponent implements OnInit {

  private recipe: Recipe;

  constructor(private recipeService: RecipeService, private activatedRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (data: Params) => {
        this.recipe = this.recipeService.getRecipe(+data['id']);
      }
    );
  }

  addToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

  onRecipeEdit() {
    this.router.navigate(['edit'], {relativeTo: this.activatedRoute});
  }
}
