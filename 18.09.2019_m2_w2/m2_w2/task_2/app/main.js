import {Product} from './checkProd.js';
import {strProduct} from './productAll.js';

let arrMyShopList = [],
    //массив обьектов;
    quantityMyProd = prompt('Введите количество Ваших покупок:', 5),
    name,
    amountProd,
    price,
    minPrice = 5,
    maxPrice = 1000,
    arrName = [],
    minAmountProd = 0,
    maxAmountProd = 10;
// debugger;
arrName = strProduct.split(' ');
//массив имён продуктов;
const nameLen = arrName.length;

    for(let i = 0; i < quantityMyProd; i++){
      //массив обьектов продуктов;
      name = arrName[Math.floor(Math.random() * nameLen)];
      amountProd = Math.floor((Math.random() * maxAmountProd - minAmountProd) + minAmountProd + 1);
      price = Math.floor((Math.random() * maxPrice - minPrice) + minPrice);

    let myProduct = new Product(name, amountProd, price);
        arrMyShopList.push(myProduct);
    }

function infoListArr(){
    //вывод списка продуктов;
    for(let j = 0; j < arrMyShopList.length; j++){
      console.log(arrMyShopList[j].getInfo());
    }
}

function getSumList(){
    //вывод суммы чека;
    let sum, sumAllPrice = 0;

    for(let j = 0; j < arrMyShopList.length; j++){
      sum = arrMyShopList[j].price;
      sumAllPrice += sum;
    }
    return sumAllPrice;
}

function getHihgPrice(arr){
    //самая высокая цена в чеке;
    const max = arr.reduce(function(prev, current) {
      return (prev.price > current.price) ? prev : current
    });
      return `${max.name}; количество: ${max.amountProd}; цена: ${max.price}грн.`;     
}

function averagePrice(){
  //средняя стоимость одного товара в чеке;
  let sum, sumAllPrice = 0;

  for(let j = 0; j < arrMyShopList.length; j++){
    sum = arrMyShopList[j].price;
    sumAllPrice += sum;
  }
  sumAllPrice /= quantityMyProd;
  return sumAllPrice;
}

infoListArr();
console.log( `\nИтого: ${getSumList()}грн.`);
console.log(`\nСамая дорогая покупка: ${getHihgPrice(arrMyShopList)}`);
console.log(`\nСредняя стоимость товара в чеке: ${averagePrice().toFixed(2)}грн.`);
