"use strict";


if (number === 0) {
  alert('Вы ввели число 0');
}

if (number === 1) {
  alert('Вы ввели число 1');
}

if (number === 2 || number === 3) {
  alert('Вы ввели число 2, а может и 3');
}
const number = 3;
switch (number) {
  case 0:
    console.log('Вы ввели число 0');
    break;
  case 1:
    console.log('Вы ввели число 1');
    break;
  case 2:
  case 3:
    console.log('Вы ввели число 2, а может и 3');
    break;
  default:
    console.log('Вы ввели недоступное для обработки число')
    break;
}