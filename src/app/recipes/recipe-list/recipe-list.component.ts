import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('Idli', 'Soft and best for breakfast',
    'http://www.sclance.com/wallpapers/sambar-hd-wallpapers/sambar-hd-wallpapers_2038314.jpg'),
    new Recipe('Dosa', 'Yum traditional dish',
    'https://desidine2go.com/wp-content/uploads/2015/12/plaindosa.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
