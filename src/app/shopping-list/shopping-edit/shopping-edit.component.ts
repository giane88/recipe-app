import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from '../../ingredient.model';

@Component({
             selector: 'app-shopping-edit',
             templateUrl: './shopping-edit.component.html',
             styleUrls: ['./shopping-edit.component.css']
           })
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;

  @Output() addedIngridient = new EventEmitter<Ingredient>();

  constructor() {
  }

  ngOnInit() {
  }

  addIngridient() {
    const amount = Number(this.amountInputRef.nativeElement.value);
    const name = this.nameInputRef.nativeElement.value;
    this.addedIngridient.emit(new Ingredient(name, amount));
  }
}
