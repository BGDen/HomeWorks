export class Product{
  //класс нового продукта;
  constructor(name = '', amountProd = 0, price = 0){
    this.name = name;
    this.amountProd = amountProd;
    this.price = price;
  }
  getInfo(){
    //метод вывода списка (чека);
    return `Покупка: ${this.name}; колличество: ${this.amountProd}; цена: ${this.price}грн.`;

  }
}
 