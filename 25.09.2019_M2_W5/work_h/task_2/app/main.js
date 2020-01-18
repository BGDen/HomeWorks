class ExtendedDate extends Date{
  outputMonth(){
      let arrMonth = ['Января','Февраля','Марта','Апреля','Мая','Июня','Июля','Августа','Сентября','Октября','Ноября','Декабря'],
          arrNumMonth = ['Первое','Второе','Третье','Четвертое','Пятое','Шестое','Седьмое','Восьмое','Девятое','Десятое','Одинадцатое','Двенадцатое','Тринадцатое','Четырнадцатое',
                          'Пятнадцатое','Шестнадцатое','Семнадцатое','Восемнадцатое','Девятнадцатое','Двацотое','Двадцать первое','Двадцать второе','Двадцать третье','Двадцать четвертое',
                          'Двадцать пятое','Двадцать шестое','Двадцать седьмое','Двадцать восьмое','Двадцать девятое','Тридцатое','Тридцать первое'];
              
            let len = arrNumMonth.length,
            sm = arrNumMonth[this.randomizer(len)];
            
            // метод отображения даты  (день + месяц)
            const strPrint = `${arrNumMonth[this.getDate(sm) - 1]} ${arrMonth[this.getMonth()]}`;
            let p = document.createElement('p');
            p.innerText = strPrint;
            document.body.append(p);
  }
  
  randomizer(max, min = 0){ // рандомный генератор
    return Math.floor(Math.random() * (max - min) + min);
  }

  checkDate(){ // метод отображения времени даты  прошлая/будущая
    let now = Date();
    if(Date.parse(now) > Date.parse(this)){
      let strDate = `Прошедшая дата`,
          strD = document.createElement('p');
          strD.innerText = strDate;
          document.body.append(strD);
    }else{
      let strDate = `Будущая дата`,
          strD = document.createElement('p');
          strD.innerText = strDate;
          document.body.append(strD);
    }
  }

  checkYear(y = this.getFullYear()){ // метод отображения классификации генерируемого года

    if(((y % 4) != 0) || ((y % 100) == 0) && ((y % 400) != 0)){
      let strCheck = `Год НЕ высокосный!`,
      strC = document.createElement('p');
      strC.innerText = strCheck;
      document.body.append(strC);
    }else{
      let strCheck = `Год высокосный!`,
      strC = document.createElement('p');
      strC.innerText = strCheck;
      document.body.append(strC);
    }
  }

  tomorrow(){ // метод отображения полной даты

      let strTomrw = `${this.getDate() + 1}.${this.getMonth() + 1}.${this.getFullYear()}`,
          strT = document.createElement('span'),
          style = document.createElement('style');

          strT.innerText = strTomrw;
          style.innerText = `span {border-bottom: 3px solid black}`;
          document.body.append(strT);
          document.head.append(style);
  }
}

function task_2() { // генератор случайной даты

  let a = Math.floor(Math.random() * (3000 - 1000) + 1000),
  b = Math.floor(Math.random() * (12 - 1) + 1),
  c = Math.floor(Math.random() * (31 - 1) + 1);

  const myDate = new ExtendedDate(a, b, c);

  myDate.outputMonth();
  myDate.checkDate();
  myDate.checkYear();
  myDate.tomorrow();
}