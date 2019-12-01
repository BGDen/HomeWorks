export class Products{
  //класс для нового продукта
  constructor(name = '', amountProd = 0, boughtProd = 0){
    this.name = name;
    this.amountProd = amountProd;
    this.boughtProd = boughtProd;

  }
  getInfo(){
  //метод для вывода списка в консоль
    if(this.boughtProd == 0){
      return `Необходимо взять: ${this.name}  в количестве: ${this.amountProd} - ещё не купил.`;
    }else{
      return `Необходимо взять: ${this.name}  в количестве: ${this.amountProd} - уже купил.`;
    }
  }
} 