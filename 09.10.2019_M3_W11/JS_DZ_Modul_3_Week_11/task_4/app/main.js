myLink = {
  btnLight: document.querySelector('.btn_light'),
  circleLight: document.querySelectorAll('.circle_light')
}

myLink.btnLight.addEventListener('click', () => {
    [...myLink.circleLight].some(elem => {
         if(!elem.classList.contains('gray')){
           if(elem.nextElementSibling){
              elem.classList.add('gray'); //добавляем класс gray в div если он отсутствует
              elem.nextElementSibling.classList.remove('gray'); //удаляем класс gray в следующем div
              return true;
           }else{
                elem.classList.add('gray');
                elem.previousElementSibling.previousElementSibling.classList.remove('gray');
                return true;
           }
         }
    });
});