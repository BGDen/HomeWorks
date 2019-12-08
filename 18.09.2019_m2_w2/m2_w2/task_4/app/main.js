import Classroom from './classroom.js';
import Group from './group.js';
import {nameFaculty} from './faculty_name.js';

let minNum = 10,
    maxNum = 20,
    arrNameFac = [],
    arrClassroom = [];

  arrNameFac = nameFaculty.split(',');
  //массив названий факультетов;

let arrNameFacLen =arrNameFac.length,
    num = 0;

for(let i = 0; i < arrNameFacLen; i++){
  //массив объектов 'аудитория'
    for(let j = 0; j <= 5; j++){
      
       num++;
       let numSeats = Math.floor(Math.random() * (maxNum - minNum) - minNum + 1),
           faculty = arrNameFac[Math.floor(Math.random() * arrNameFacLen)],
           classRoom = new Classroom(name = '№' + num, numSeats, faculty);

           arrClassroom.push(classRoom);
    }
}

[...arrClassroom].forEach(elem =>{
       console.log(`аудитория: ${elem.name}; \n кол-во мест: ${elem.numSeats}; \n Факультет: ${elem.faculty}`);
});
