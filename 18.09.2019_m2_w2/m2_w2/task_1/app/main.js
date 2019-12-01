import {Products} from '../app/my_product.js';
import {strProduct} from '../app/all_product.js';

let shoppingList = [],
    quantityProd = prompt('Введитенеобходимое количество продуктов', 5),
    name,
    amountProd,
    boughtProd,
    arrName = [],
    arrNumBought = [0,1],
    minAmount = 0,
    maxAmount = 10;

arrName = strProduct.split(' ');
const nameLen = arrName.length,
      boughtLen = arrNumBought.length;

      console.log(nameLen);
      console.log(quantityProd);

      for(let i = 0; i < quantityProd; i++){
        //масив обьектов
        name = arrName[Math.floor(Math.random() * nameLen)];
        amountProd = Math.floor((Math.random() * maxAmount - minAmount) + minAmount + 1);
        boughtProd = arrNumBought[Math.floor(Math.random() * boughtLen)];

        let allPproduct = new Products(name, amountProd, boughtProd);
        shoppingList.push(allPproduct);
      }


function sortMyArr(){
  //сортировка (ещё не купил/ уже купил)
  shoppingList.sort(function(a, b){
    return a.boughtProd - b.boughtProd;
  });
}

function infoMyArr(){
  //вывод списка продуктов
  for(let j = 0; j < shoppingList.length; j++){
    console.log(shoppingList[j].getInfo());
  }
}

function inputMyArr(){
  //добавление нового продукта
  let questionBy = confirm('Хотите добавить новый продукт в список?'),
      newName,
      newAmountProd,
      newBoughtProd,
      newAllProduct;

if(questionBy == true){
    newName = prompt('Введите название продукта: '),
    newAmountProd = parseInt(prompt('Введите количество продуктов: ')),
    newBoughtProd = 1;

  const index = shoppingList.findIndex(shoppingList => shoppingList.name === newName);
  //поиск повтор name
    if(shoppingList[index].name == newName){
      //при совпадении меняем значение
       shoppingList[index].amountProd += newAmountProd;
       shoppingList[index].boughtProd = 1;

    }else{
      newAllProduct = new Products(newName, newAmountProd, newBoughtProd);
      shoppingList.push(newAllProduct);
    }
    }
}
sortMyArr();
infoMyArr();
inputMyArr();
console.clear();
sortMyArr();
infoMyArr();

