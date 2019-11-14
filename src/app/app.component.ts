import { Component } from '@angular/core';
import { Drink } from './drink.model';
import { CocktailService } from './cocktail.service';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements onInit  {
  name = 'Angular';
  cocktailList: Drink[];
  constructor( private cocktailSvc: CocktailService ){}

  ngOnInit(){
    this.cocktailSvc.list().subscribe(
      res => {
        this.cocktailList = res;
        console.log(this.cocktailList);
      }
    )
    let drink = new Drink('Margharita');
    console.log(drink.getfullName());
  }
}
