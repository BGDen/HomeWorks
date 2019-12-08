import Classroom from './classroom.js';
import Group from './group.js';
import {nameFaculty} from './faculty_name.js';

let minNum = 10,
    maxNum = 20,
    arrNameFac = [],
    arrClassroom = [],
    arrClassroomSort = [],
    classRoom = 0;


  arrNameFac = nameFaculty.split(',');
  //массив названий факультетов;

let arrNameFacLen = arrNameFac.length,
    num = 0;

for(let i = 0; i < arrNameFacLen; i++){
  //массив объектов 'аудитория'
    for(let j = 1; j <= 5; j++){

       num++;
       let numSeats = Math.floor(Math.random() * (maxNum - minNum) + minNum + 1),
           faculty = arrNameFac[Math.floor(Math.random() * arrNameFacLen)];

           classRoom = new Classroom(name = '№ ' + num, numSeats, faculty);

           arrClassroom.push(classRoom);
           arrClassroomSort.push(classRoom);
    }
}

function Auditoriums(){
  //вывод всех аудиторий в консоль;

  [...arrClassroom].forEach(elem =>{
        console.log(`\nАудитория: ${elem.name}; \nкол-во мест: ${elem.numSeats}; \nФакультет: ${elem.faculty} \n `);
  });
}

function ClassroomFilter(){
  //Вывод аудиторий для указанного факультета;

  let arrClassroomFac = arrClassroom.filter(elem => {
    return elem.faculty == 'Заочный факультет';
  });
  console.log(arrClassroomFac); 
}

let nameGroup = 'group - ' + Math.floor(Math.random() * 10) + 1,
    students = Math.floor(Math.random() * (maxNum - minNum) + minNum + 1),
    faculty = arrNameFac[Math.floor(Math.random() * arrNameFacLen)],
    group = new Group(nameGroup, students, faculty);
    //объект группа;

function GroupFilter(){

  let arrClassroomGroup = arrClassroom.filter(elem => {
    return elem.faculty == group.faculty && elem.numSeats >= group.students;
  });
  console.log(group);
  //Переданная группа;
  console.log(arrClassroomGroup);
  //Вывод на экран только тех аудиторий, которые подходят для переданной группы;
}

function ClassroomSort(){
//сортировка аудиторий по количеству мест
  arrClassroom.sort(function(a, b) { return a.numSeats - b.numSeats});
  console.log(arrClassroom);
}

function ClassroomNameSort(){
  //сортировка аудиторий по названию

  arrClassroomSort.sort(function(a, b){
      let nameA = a.faculty.toLowerCase(),
          nameB = b.faculty.toLowerCase();

      if (nameA < nameB) return -1;
      if (nameA > nameB) return 1;
      else return 0;
      });

  console.log(arrClassroomSort);
}

Auditoriums();
ClassroomFilter();
GroupFilter();
ClassroomSort();
ClassroomNameSort();
