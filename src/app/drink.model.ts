export class Drink implements Deserializable{
name: String;
constructor (
  name: String
){
this.name = name;
}

  deserialize(input: any) {
    Object.assign(this, input);
    return this;
  }

static adapt(item: any){}

getfullName(){
  return this.name;
}
}

export interface Deserializable {
  deserialize(input: any): this;
}

