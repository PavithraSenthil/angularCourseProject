import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Idli', 'Soft and best for breakfast',
    'https://image.freepik.com/free-photo/idli-vada-south-indian-food_57665-731.jpg',
    [
      new Ingredient('Batter', 20),
      new Ingredient('Idli Pan', 1)
    ]),
    new Recipe('Dosa', 'Yum traditional dish',
    'https://desidine2go.com/wp-content/uploads/2015/12/plaindosa.jpg',
    [
      new Ingredient('Batter', 20),
      new Ingredient('Oil', 10)
    ])
  ];

  constructor(private slService: ShoppingListService) {
  }

  getRecipes() {
    return this.recipes.slice(); // To make a copy of the array and not return the actual reference of the array
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
