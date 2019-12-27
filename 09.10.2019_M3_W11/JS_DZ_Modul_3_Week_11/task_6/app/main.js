myLink = {
  mainBtnHelp: document.querySelector('.main_btnHelp')
}

let helpNote = null;

myLink.mainBtnHelp.addEventListener('mouseover', (ev) => {
    if (ev.target.tagName == 'BUTTON') {  // target получает элемент, в котором произошло событие mouseover
        helpNote = document.createElement('div'); // генерация div всплывающего окна подсказки
        helpNote.classList.add('note_bottom', 'note_top'); // добавляем классы свойств к всплывающим окнам на кнопки
        helpNote.innerHTML = ev.target.dataset.help; // dataset.help вернёт текст атрибута data-help "Подсказонька"
        myLink.mainBtnHelp.append(helpNote); // append вставляет содержимое (div note_bottom) (div note_top) - отобразит всплывающее окно с надписью
        // console.log(helpNote);
        calcXY(ev.target); // расположим "Подсказонька" по XY относительно BUTTON
    }
});

myLink.mainBtnHelp.addEventListener('mouseout', () => { // когда мышка уйдёт с поля BUTTON "Подсказонька" исчезнет
    if (helpNote) {
        helpNote.remove();
        helpNote = null;
    }
});

function calcXY(elem) { // XY относительно BUTTON
    let btn = elem.getBoundingClientRect(), // метод вернет размер элемента и его положение относительно области просмотра
        parentDiv = elem.parentElement.getBoundingClientRect(); // метод вернет размер Parent элемента и его положение относительно области просмотра

    if ((btn.top - parentDiv.top) > (helpNote.clientHeight)) { // 76 > 38 

        // console.log(btn.top);
        // console.log(parentDiv.top);
        // console.log(helpNote.clientHeight);

        helpNote.classList.remove('note_bottom'); // remove удаляет "Подсказонька" на первой кнопке
        helpNote.style.top = (btn.top - helpNote.clientHeight - 21) + 'px'; // отступ "Подсказонька" от кнопки
        helpNote.style.left = btn.left + 'px'; // привязка "Подсказонька" к расположению кнопки

    }else{ // 6 < 38

        helpNote.classList.remove('note_top'); // remove удаляет "Подсказонька" на второй кнопке
        helpNote.style.top = (btn.bottom + 21) + 'px'; // отступ "Подсказонька" от кнопки
        helpNote.style.left = btn.left + 'px'; // привязка "Подсказонька" к расположению кнопки

        // console.log(btn.top);
        // console.log(parentDiv.top);
        // console.log(helpNote.clientHeight);

    }
}

