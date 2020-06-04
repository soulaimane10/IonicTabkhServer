import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ApiService } from "../services/api.service";
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {
  arraysRecipes  = [];

  constructor(public apiService : ApiService,public activeRoute:ActivatedRoute,public router:Router) { }

  ngOnInit() {
    let id = this.activeRoute.snapshot.paramMap.get('id');

   this.apiService.getRecipes(id).subscribe((response: any) => {

    this.arraysRecipes.push(response);

});

  }
  
  showRecipe(i) {
    let navigationExtras: NavigationExtras = {
      state: {
        recipe: this.arraysRecipes[0][i]
      }
    };
 
    this.router.navigate(['recipe'], navigationExtras);
  }


}
