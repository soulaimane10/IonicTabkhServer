import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url : string;
  constructor(private http: HttpClient) {
    this.url = "http://localhost/tabkh/api.php"
  }

  getRecipes(idCat) {
    const data = {

   };
    return this.http.post(this.url+"?action=getrecipes&cat="+idCat,JSON.stringify(data))
  }

  getCategorys() { 
    const data = {

  };
    return this.http.post(this.url+"?action=getcategory",JSON.stringify(data))
  }

  getRecipesSerach(search: string) {
    const data = {

    };
    return this.http.post(this.url+"?action=getrecipes&search="+search,JSON.stringify(data))
  }

}
