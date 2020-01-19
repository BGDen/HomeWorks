class Employee{

  constructor(name = '', age = '', department = ''){ // структура содержимого таблицы
    this.name = name;
    this.age = age;
    this.department = department;
  }
}

class EmpTable{
  constructor(arrEmpl = []){
    this.arrEmpl = arrEmpl;
  }

  getHtml(){ // метод отображения table+style
    let htmlCode = '';
    htmlCode = `<table border='1' style='text-align:center; margin-top:30vh;' align='center'><tr><th>Cотрудник</th><th>Возраст</th><th>Отдел</th></tr>`;
    this.arrEmpl.forEach(el => {htmlCode += `<tr><td>${el.name}</td><td>${el.age}</td><td>${el.department}</td></tr>`;});
    htmlCode += `</table>`;

    return htmlCode; 
  }
}

class StyledEmpTable extends EmpTable{ // наследование StyledEmpTable <= EmpTable

  getStyles(color = '', border = '', bgcolor = ''){ // структурирование содержимого атрибута style
      return `color: ${color}; border: ${border}; background-color: ${bgcolor};`;
  }

  getHtml(style){ // метод добавления структурированного содержимого в атрибуд style
    let htmlCode = super.getHtml(),
        ind = 0,
        styleHtmlCode = '';

    ind = htmlCode.indexOf(`style='`);
    styleHtmlCode = htmlCode.slice(0, ind + 7) + style + htmlCode.slice(ind + 7);
    return styleHtmlCode;
  }
}

function printStyleEmpl(){
  let arrEmp = [],
  arrName = ['Бобров','Иванов','Хоботенко','Ресницина','Тяпкин','Жмых','Веляева','Кадыкина'],
  arrDepart = ['Финансовый отдел','Казначейство','Отдел продаж','Отдел снабжение','Транспортный отдел'],
  style = '';

// debugger;

  for(let i = 0; i < arrName.length; i++){

    let randomizer = Math.floor(Math.random() * (50 - 20) + 20),
    employee = new Employee(arrName[i], randomizer, arrDepart[Math.floor(Math.random() * arrDepart.length)]);
    arrEmp.push(employee);
    console.log(arrEmp);
  }

   const empStyleTable = new StyledEmpTable(arrEmp);
   style = empStyleTable.getStyles('red', '1px solid', '#CCE5FF'); // содержимое структуры атрибута
   document.write(empStyleTable.getHtml(style));
}
