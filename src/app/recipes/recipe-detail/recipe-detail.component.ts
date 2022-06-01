import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';
import {RecipeService} from '../recipe.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { BehaviorSubject } from "rxjs";
@Component({
             selector: 'app-recipe-detail',
             templateUrl: './recipe-detail.component.html',
             styleUrls: ['./recipe-detail.component.css']
           })
export class RecipeDetailComponent implements OnInit {

  public recipe: BehaviorSubject<Recipe>;

  constructor(private recipeService: RecipeService, private activatedRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (data: Params) => {
        this.recipe.next(this.recipeService.getRecipe(+data['id']))
      }
    );
  }

  addToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.value.ingredients);
  }

  onRecipeEdit() {
    this.router.navigate(['edit'], {relativeTo: this.activatedRoute});
  }
}
