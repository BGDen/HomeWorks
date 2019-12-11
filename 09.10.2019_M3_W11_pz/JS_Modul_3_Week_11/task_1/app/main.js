const myLink = {
  btnRnd: getObject('.button_rnd')
}

function getObject(cssClass, all = false) {
  if (all) {
      return document.querySelectorAll(cssClass);
  }else{
      return document.querySelector(cssClass);
  }
}

myLink.btnRnd.addEventListener('click', () => {
  getObject('.number_rnd').innerHTML = Math.floor(Math.random() * 101);
})
