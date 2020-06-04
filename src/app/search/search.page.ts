import { Component, OnInit } from '@angular/core';
import {ApiService } from "../services/api.service";

import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage {

  constructor(public apiService : ApiService,public router:Router) { }
  recipes  = [];
  recipeSearch: string

  searchRecipes(serach) {
    this.recipeSearch = serach.target.value
    if(this.recipeSearch.length > 2 ) {
      this.recipes.length = 0
      this.loadRecipes(this.recipeSearch)
    }
  }

  loadRecipes(search) {
    this.apiService.getRecipesSerach(search)
    .subscribe((response: any) => {

      this.recipes.push(response);
  
  }
    );

  }

  showRecipe(i) {
    let navigationExtras: NavigationExtras = {
      state: {
        recipe: this.recipes[0][i]
      }
    };
 
    this.router.navigate(['recipe'], navigationExtras);
  }


}
