const myLink = {
  divXY: getObject('.main_XY')
};

function getObject(cssClass, all = false) {
  if (all) {
      return document.querySelectorAll(cssClass);
  }else{
      return document.querySelector(cssClass);
  }
}

myLink.divXY.addEventListener('mousemove', (ev) => {
  ev.target.innerHTML = `X = ${ev.x}, Y = ${ev.y}`;
})

myLink.divXY.addEventListener('mousedown', (ev) => {
  ev.target.innerHTML = (ev.which == 1) ? `Left mouse button` : 
      (ev.which == 2) ? `Scroll mouse button` : `Right mouse button`;
})
