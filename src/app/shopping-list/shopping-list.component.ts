import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[] = [
    new Ingredient('Applies1', 501),
    new Ingredient('Applies2', 502),
    new Ingredient('Applies3', 503),
    new Ingredient('Applies4', 504),
    new Ingredient('Applies5', 505)
  ];
  constructor() { }

  ngOnInit() {
  }

}
