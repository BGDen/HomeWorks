myLink = {
  list: document.querySelector('.list'),
  listItems: document.querySelectorAll('.list_items')
}

myLink.list.addEventListener('click', (ev) => {
  if(ev.target.tagName == 'LI'){
    myLink.listItems.forEach((el) => (el.textContent != ev.target.textContent) ? el.classList.remove('selected') : el.classList.toggle('selected'));
  }

  // textContent получает текстовое содержимое элемента
  // target получает элемент, в котором произошло событие click
  // remove удаляет CSS класс selected
  // toggle добавляет CSS класс selected

});