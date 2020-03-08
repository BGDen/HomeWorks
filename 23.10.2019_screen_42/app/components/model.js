 export class Model{
   constructor(controller){
     this.controller = controller;
     this.arr = [];
    //  this.arr2 = [];
   }

   saveData(str){
     this.arr.unshift(str);
     localStorage.setItem('str', JSON.stringify(this.arr));
   }

   getData(key){
     return JSON.parse(localStorage.getItem(key));
   }
 }