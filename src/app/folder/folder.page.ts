import { Component, OnInit } from '@angular/core';
import {ApiService } from "../services/api.service";
import {Router} from '@angular/router';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  arraysCategorys  = [];

  constructor(public apiService : ApiService,public router:Router) { }

  ngOnInit() {
    this.apiService.getCategorys().subscribe((response: any) => {

      this.arraysCategorys.push(response);


});
  }

  showRecipes(idCate: number, title: String ) {
    
    this.router.navigate(['recipes',idCate]);
  }

}
