import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from '../../model/ingredient.model';
import {ShoppingListService} from '../shopping-list.service';

@Component({
             selector: 'app-shopping-edit',
             templateUrl: './shopping-edit.component.html',
             styleUrls: ['./shopping-edit.component.css']
           })
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput', { static: true }) nameInputRef: ElementRef;
  @ViewChild('amountInput', { static: true }) amountInputRef: ElementRef;


  constructor(private shoppingListService: ShoppingListService) {
  }

  ngOnInit() {
  }

  addIngridient() {
    const amount = Number(this.amountInputRef.nativeElement.value);
    const name = this.nameInputRef.nativeElement.value;
    this.shoppingListService.addIngredient(new Ingredient(name, amount));
  }
}
