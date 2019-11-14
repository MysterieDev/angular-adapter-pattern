import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Drink } from './drink.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable()
export class CocktailService {

  constructor(private http: HttpClient) { }

  private url = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail"

  list(): Observable<Drink[]>{
    return this.http.get(this.url).pipe(
      map(
        (data: any) => 
          data.drinks.map(
          (item: any) => new Drink(
            item.strDrink
          )
        )
      )
    );
  }
}