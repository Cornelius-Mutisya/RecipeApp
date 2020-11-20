import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'A test Recipe',
      'This is simply a test',
      'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2018/12/Shakshuka-19.jpg'
    ),
    new Recipe(
      'Another test Recipe',
      'A second test',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAtSsWncpqyTyySN9MfruwODDNsbjNyho25A&usqp=CAU'
    ),
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
