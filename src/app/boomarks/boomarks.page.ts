import { Component, OnInit } from '@angular/core';
import { BoomarksService } from "../services/boomarks/boomarks.service";

import { Router, NavigationExtras } from '@angular/router';
@Component({
  selector: 'app-boomarks',
  templateUrl: './boomarks.page.html',
  styleUrls: ['./boomarks.page.scss'],
})
export class BoomarksPage {

  recipes  = [];

  constructor(public boomarksService : BoomarksService,public router:Router
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BookmarksPage');

    this.boomarksService.bookMark().then(recipes => {
      this.recipes = recipes
    })
  }

  ionViewWillEnter() {
    this.boomarksService.bookMark().then(recipes => {
      this.recipes = recipes
    })    
  }


  showRecipe(i) { 

    let navigationExtras: NavigationExtras = {
    state: {
      recipe: this.recipes[i]
    }
  };

  this.router.navigate(['recipe'], navigationExtras);
}

  }

