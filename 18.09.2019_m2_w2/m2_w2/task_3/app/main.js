class ObjStyle {
  constructor(text = 'no text', value = 'no value') {
      this.text = text;
      this.value = value;
  }
}

const arrStyle = [];

let stlWidth = new ObjStyle('Width', 'width: 250px;'), 
    stlMargin = new ObjStyle('Margin', 'margin: 2em;'),
    stlFontSize = new ObjStyle('Font size', 'font-size: 2em;'),
    stlColor = new ObjStyle('Text color', 'color: red;'),
    stlFontFam = new ObjStyle('Font fammily', 'font-family: sans-serif;'),
    stlPad = new ObjStyle('Padding', 'padding: 1em;'),
    stlBorder = new ObjStyle('Border', 'border: 2px solid blue;'),
    stlBordRad = new ObjStyle('Background-color', 'background-color: lightgreen;'),

    sumArr = [],
    sumStr = prompt('Введите строку содержащую любой текст: ', 'JavaScript');

// debugger;

arrStyle.push(stlWidth,stlMargin,stlColor,stlFontFam,stlFontSize,stlPad,stlBorder,stlBordRad);

function infoObj(arr){
    
  arr.forEach(function(obj){
    for (let value in obj){
      sumArr.push(obj[value])
    }
  });

  document.write(`<p style='${sumArr.filter(function(_, i){
    return i % 2 !== 0;
  }).join(' ')}'> ${sumStr}  &nbsp; :)<p>`);

}

infoObj(arrStyle);
