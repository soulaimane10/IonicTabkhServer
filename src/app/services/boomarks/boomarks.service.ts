import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class BoomarksService {

  constructor(public storage: Storage) {
  }


  bookMark() {
    return this.storage.get('bookmarks').then(bookmarks => {
      if(bookmarks == null) {
        bookmarks = new Array<any>()
      }
      return bookmarks
    })
  }

  isBookmared(recipe: any) {
    return this.bookMark().then(recipes => {
      for(let i = 0; i < recipes.length; i++) {
        if(recipes[i].id_recipe == recipe.id_recipe) {
          return true
        }
      }
      return false
    })
  }


  addBookmark(recipe: any) {
    this.bookMark().then(recipes => {
      recipes.push(recipe)
      this.save(recipes)
    })
  }

  removeBookmared(recipe: any) {
    this.bookMark().then(recipes => {
      recipes.splice(recipes.findIndex(elm => elm.id_recipe == recipe.id_recipe ), 1)
      this.save(recipes)
    })
  }

  save(recipes) {
    this.storage.set('bookmarks', recipes)
  }

}
