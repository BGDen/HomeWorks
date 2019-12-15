const myLink = {
  btnAddPercent: document.querySelector('.btn_add_percent'),
  progressbar: document.querySelector('.progressbar')
}

let arrProgressbar = [...myLink.progressbar.children],
    len = arrProgressbar.length;

myLink.btnAddPercent.addEventListener('click', () => {

    for (let i = len - 2; i >= 0; i--) {
        if (arrProgressbar[len - 1].classList.contains('percents')) {
            arrProgressbar.forEach((el) => el.classList.remove('percents'));
            break;

        }if (arrProgressbar[i].classList.contains('percents')) {
            arrProgressbar[i + 1].classList.add('percents');
            break;

        }else if (!arrProgressbar[0].classList.contains('percents')){
            arrProgressbar[0].classList.add('percents')
            break;
        }           
    }
});
