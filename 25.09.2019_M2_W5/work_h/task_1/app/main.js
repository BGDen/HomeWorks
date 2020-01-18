class Marker {
  constructor(color = "black", ink = 0){
      this.color = color;
      this.ink = ink;
  }

  print(text){

      let pos = 0;

      if(this.ink) {
            pos = this.ink / 0.5; 

        for(let i = 0; i < pos; i++) {
            (text[i] == ' ') ? pos++ : false;            
        }

        let strPrint = `${text.slice(0, pos)}`,
            p = document.createElement('p'),
            style = document.createElement('style');

            p.innerText = strPrint;
            style.innerText = `p {color: ${this.color}}`
            document.body.append(p);
            document.head.append(style);

      }else{
            let strPrint = `В маркере нет чернил!`,
            p = document.createElement('p');

            p.innerText = strPrint;
            document.body.append(p);
      }
    }
}

const myLink = {
  btnHideShow: document.querySelector('.btn_del')
}

myLink.btnHideShow.addEventListener('click', (ev) => {
  if(ev.type == 'click'){
  document.querySelector('p').parentNode.removeChild(document.querySelector('p'));
  }
});

function printMarker() {
  const redMarker = new Marker(prompt('Введите цвет маркера (red, green, blue и тд.)'), parseInt(prompt('Введите кол-во чернил в процентах')));
  
  redMarker.print(prompt('Введите строку котурую нужно написать маркером'));    
}

function refillMarker() {
  const newMarker = new ZapMarker('green', 2);
  
  newMarker.refill(parseInt(prompt('Введите кол-во чернил в процентах, чтоб заправить маркер')));
  newMarker.print(prompt('Введите строку котурую нужно написать маркером'));
}
