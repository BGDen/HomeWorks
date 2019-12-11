const myLink = {
  btnHideShow: getObject('.btn_hidden_show')
}

function getObject(cssClass, all = false){
  if(all){
    return document.querySelectorAll(cssClass);
  }else{
    return document.querySelector(cssClass);
  }
}

myLink.btnHideShow.addEventListener('click', () => {
  getObject('.hidden_text').classList.toggle('display_none');
});