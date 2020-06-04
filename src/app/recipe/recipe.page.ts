import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BoomarksService } from "../services/boomarks/boomarks.service";

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.page.html',
  styleUrls: ['./recipe.page.scss'],
})
export class RecipePage implements OnInit {

  recipe: any;
  taprecipe: String = "ingredients"
  bookmarkicon: String = "heart-outline"
  isBookmarked: boolean = false
  constructor(public boomarksService : BoomarksService,private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.recipe = this.router.getCurrentNavigation().extras.state.recipe;
      }
    });

    this.boomarksService.isBookmared(this.recipe).then(isBooked => {
      if(isBooked) {
        this.bookmarkicon = "heart"
        this.isBookmarked = true
      }
    })
  }

  bookmark() {
    if(this.isBookmarked) {
      this.boomarksService.removeBookmared(this.recipe)
      this.bookmarkicon = "heart-outline"
      this.isBookmarked = false
    } else {
      this.boomarksService.addBookmark(this.recipe)
      this.bookmarkicon = "heart"
      this.isBookmarked = true  
    }
  }
}
