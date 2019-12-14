const myLink = {
  btnHideShow: document.querySelector('.btn_hidden_show')
}

myLink.btnHideShow.addEventListener('click', () => {
  document.querySelector('.hidden_text').classList.toggle('display_none');
});