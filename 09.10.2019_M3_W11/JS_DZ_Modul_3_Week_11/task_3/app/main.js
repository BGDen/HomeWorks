const field = document.querySelector('.field');

class myBall {

  constructor() {
    this.ball = document.querySelector('.ball');
    this.ballImg = document.querySelector('.ball-img');

    // функции-обработчики событий
    field.addEventListener('click', (ev) => this.click(ev));
    field.addEventListener('mousemove', () => this.rotate());
  }

  click(event) {

    let w = field.offsetWidth - 50,
      h = field.offsetHeight - 50,
      x = event.x,
      y = event.y;

    // условие-ограничитель, чтоб мяч не выходил за пределы поля
    if (x < 50) { x = 50; }
    else if (x > w) { x = w; }

    if (y < 50) { y = 50; }
    else if (y > h) { y = h; }

    // передача координат события мыши контейнеру с мячом
    this.ball.style.transform = `translate(${x - 50}px, ${y - 50}px)`;
  }

  rotate() {

    let contPos = this.ball.getBoundingClientRect(), //получаем данные относительно позиции контейнера
      cx = contPos.left + contPos.width / 2, //его ширину
      cy = contPos.top + contPos.height / 2; //его высоту

    let angle = Math.atan2(event.y - cy, event.x - cx); //вычисляем необходимый угол

    this.ballImg.style.transform = "rotate(" + angle + "rad)"; //поворот мяча на вычисленный угол
  }
}

//инициализация мяча
new myBall();