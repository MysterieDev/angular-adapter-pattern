export class Drink{
name: String;
imgThumb: String;
constructor (
  name: String,
  imgThumb: String
){
this.name = name;
this.imgThumb = imgThumb;
}

static adapt(item: any){
  return new Drink (
    item.strDrink,
    item.strDrinkThumb
  );
}

getfullName(){
  return this.name;
}
}
