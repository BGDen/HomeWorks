class myMath {

  constructor(){
    this.operand = ['*', '/', '-', '+'];
    this.container = document.querySelector('.container');
    this.input = document.querySelector('.input-number');
    this.btn = document.querySelector('.btnAdd');
    this.result = this.getMath(); 
  }

  getMath(){ // метод отображения математического выражения
     let values = {
       oper: this.operand[this.randomizer(this.operand.length)],
       firstNum: this.randomizer(100, 10),
       secondNum: this.randomizer(100, 10),
       mathOperation: ''
     }
     if(values.oper == '*'){
       values.firstNum = this.randomizer(30, 2);
       values.secondNum = this.randomizer(30, 2);
     }

     values.mathOperation = `${values.firstNum} ${values.oper} ${values.secondNum}`;
     this.container.innerHTML = `<span>${values.mathOperation}</span> = <span class = 'answ'></span>`;
     return +eval(values.mathOperation).toFixed(2); // eval выполнит выражение values.mathOperation, toFixed округлит результат до 2х знаков
  }
  
  randomizer(max, min = 0){
    return Math.floor(Math.random() * (max - min) + min);
  }

  checkAnswer(answ){ // метод отображения результата выражения
    document.querySelector('.answ').innerText = answ; // результат математического выражения

    if(answ == this.result){
      let d = document.createElement('h2');
          d.innerText = 'Ответ правельный!';
          this.container.append(d); // вставит содержимое переменной в конец parent

    }else{
      if(this.container.contains(document.createElement('h2'))){ // contains вернёт boolean true/false принадлежности child к parent
         return;
      }else{
        let d = document.createElement('h2');
            d.textContent = 'Подумай ещё!';
            this.container.append(d);
      }
    }
  }
}

let newMath = new myMath();
const dom = {
  btnAdd: document.querySelector('.btnAdd'),
  btnNext: document.querySelector('.btnNext'),
  input: document.querySelector('.input-number')
}
dom.btnAdd.addEventListener('click', () => {
  dom.input.value ? newMath.checkAnswer(dom.input.value) : 0;
  dom.input.value = '';
});
dom.btnNext.addEventListener('click', () => {
  newMath = new myMath();
});