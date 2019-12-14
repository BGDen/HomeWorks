const myLink = {
  btnRemove: document.querySelectorAll('.remove')
}

myLink.btnRemove.forEach((el) => {
  el.addEventListener('click', (ev) => {
     ev.target.parentElement.parentElement.classList.add('display_none');
  });
});
