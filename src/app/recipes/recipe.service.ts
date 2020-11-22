import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipe.model';

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'A test Recipe',
      'This is simply a test',
      'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2018/12/Shakshuka-19.jpg',
    [
      new Ingredient('Meat', 1),
      new Ingredient('French Fries', 20)
    ]),
    new Recipe(
      'Another test Recipe',
      'A second test',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAtSsWncpqyTyySN9MfruwODDNsbjNyho25A&usqp=CAU',
    [
      new Ingredient('Buns', 2),
      new Ingredient('Meat', 1)
    ]),
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
