const start = {
  btn: document.querySelector('.startBtn'),
  status: false
}
const obj = {
  canva: null,
  div: null
}

start.btn.addEventListener('click', () => {
  if(start.status){
    obj.canva.delete();
    obj.div.delete();
    obj.canva = new CanvasMethod();
    obj.div = new DivMethod();
  }else{
    obj.canva = new CanvasMethod();
    obj.div = new DivMethod();
    start.status = true;
  }
});

class DivMethod {

  constructor() {
    this.container = document.querySelector('.conteiner');
    this.box = document.querySelector('.canva');
    this.data = [];
    this.h2 = document.createElement('h2');
    this.createCoords();
    this.interval = setInterval(() => this.showRandomSquare(), 1000);
    this.box.prepend(this.h2);
    // prepend вставит содержимое this.h2 в начало выбранного элемента
  }

  showRandomSquare(){
    //метод отабражения квадратов
    let len = this.data.length;
    if(len == 0){
      this.theEnd();
      return;
    }else{
      this.getSquare(len);
      return;
    }
  }

  getSquare(len){
    // метод стилизации квадратов
    let sq = this.data.splice(this.randomizer(len), 1)[0];
    let div = document.createElement('div');
        div.classList.toggle('square');
        // toggle отобразит в div класс square
    let color = this.randomColor();
        div.style.backgroundColor = color;
        div.style.left = sq.x;
        div.style.top = sq.y;
        this.container.append(div);
      return;
  }

  createCoords(){
    // генерация координат
    for(let i = 0; i < 600; i = i + 60){
      for(let j = 0; j < 600; j = j + 60){
        let o = {
            x: i + 'px',
            y: j + 'px'
        }
        this.data.push(o);
        // получим массив обьектов x/y
      }
    }
    return;
  }

  theEnd(){
    // метод вывода уведомления об окончании генерации квадратов
    this.h2.textContent = 'it finished !';
    return clearInterval(this.interval);
  }

  randomizer(max){
    // метод опредиления рандомного диапазона от 0 до max
    return Math.floor(Math.random() * (max));
  }

  randomColor(){
    // метод получения рандомного оттенка rbg
    return `rbg(${this.randomizer(255)},${this.randomizer(255)},${this.randomizer(255)})`;
  }

  delete(){
    // метод удаления/обнуления
    this.box.removeChild(this.h2);
    // удаление заголовка второго уровня
    clearInterval(this.interval);
    // обнуление интервала времени
    this.container.innerHTML = '';
    // очистка содержимого элемента
    return;
  }
}

class CanvasMethod{

  constructor(){
    this.container = document.querySelector('.canvas-container');
    this.box = document.querySelector('.cont');
    this.data = [];
    this.h2 = document.createElement('h2');
    this.createCoord();
    this.canva = document.querySelector('canvas');
    this.c = this.canva.getContext('2d');
    this.interval = setInterval(() => this.showRandomSquare(), 1000);
    this.box.prepend(this.h2); // prepend вставит содержимое this.h2 в начало выбранного элемента
  }

  showRandomSquare(){ //метод отабражения квадратов
    let len = this.data.length;
    if(len == 0){
      this.theEnd();
      return;
    }else{
      this.getSquare(len);
      return;
    }
  }

  getSquare(len){ // метод стилизации квадратов
    let coord = this.data.splice(this.randomizer(len), 1)[0];
    this.c.fillStyle = this.randomColor(); // fillstyle устанавливает цвет
    this.c.fillRect(coord.x, coord.y, 60, 60); // fillRect отобразит квадрат по координатам x/y и ширина/высота = 60px
    return;
  }

  createCoord(){ // генерация координат
    for(let i = 0; i < 600; i = i + 60){
      for(let j = 0; j < 600; j = j + 60){
        let o = {
            x: i,
            y: j
        }
        this.data.push(o); // получим массив обьектов x/y
      }
    }
    return;
  }

  theEnd(){ // метод вывода уведомления об окончании генерации квадратов
    this.h2.textContent = 'it finished !';
    return clearInterval(this.interval);
  }

  randomizer(max){ // метод опредиления рандомного диапазона от 0 до max
    return Math.floor(Math.random() * (max));
  }

  randomColor(){ // метод получения рандомного оттенка rbg
    return `rbg(${this.randomizer(255)},${this.randomizer(255)},${this.randomizer(255)})`;
  }

  delete(){ // метод удаления/обнуления
    this.box.removeChild(this.h2); // удаление заголовка второго уровня
    clearInterval(this.interval); // обнуление интервала времени
    this.canva.width = this.canva.width; // очистка содержимого холста элемента
    return;
  }
}

///////////////////////////////////////////////////////
