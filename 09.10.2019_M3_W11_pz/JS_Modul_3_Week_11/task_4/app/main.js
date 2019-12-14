
const myLink = {
  list: document.querySelector('.left'),
  right: document.querySelector('.right')}

myLink.list.addEventListener('click', (ev) => {
  if(ev.target.tagName == 'LI'){
    [...myLink.list.children[0].children].forEach((el) => el.classList.remove('checked'));
        ev.target.classList.add('checked');
    [...myLink.right.children].forEach(el => {
      (el.dataset.tag == ev.target.dataset.tag) ? el.classList.remove('display_none') : el.classList.add('display_none');
    });
  }
});
