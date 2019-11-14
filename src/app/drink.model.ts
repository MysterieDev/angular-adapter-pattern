export class Drink{
name: String;
constructor (
  name: String
){
this.name = name;
}

static adapt(item: any){
  return new Drink (
    item.strDrink
  );
}

getfullName(){
  return this.name;
}
}
