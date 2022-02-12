import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes : Recipe[] = [
    new Recipe('dummy', 'dummy recipe', 'https://www.maxpixel.net/static/photo/1x/Borsch-A-Simple-Recipe-Cook-At-Home-Food-4260907.jpg'),
    new Recipe('dummy2', 'dummy recipe 2', 'https://www.maxpixel.net/static/photo/1x/Borsch-A-Simple-Recipe-Cook-At-Home-Food-4260907.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe : Recipe){
    this.recipeWasSelected.emit(recipe);
  }

}
