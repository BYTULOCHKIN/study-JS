"use strict";
const NumberOfFilms = +prompt("Сколько фильмов Вы уже посмотрели?", '');

const PersonalMovieDB = {
  count: NumberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

for (let i = 0; i < 2; i++) {
  const a = prompt('Один из последних просмотренных фильмов?', ''),
    b = prompt('На сколько оцените его?', '');

  if (a != null && b != null &&
    a != '' && b != '' && a.length < 50) {
    PersonalMovieDB.movies[a] = b;
  } else {
    console.log('error');
    i--;
  }
}

if (PersonalMovieDB.count <= 10) {
  console.log('Просмотрено довольно мало фильмов!');
} else if (PersonalMovieDB.count < 30) {
  console.log('Вы класичесский зритель');
} else if (PersonalMovieDB.count >= 30) {
  console.log('Вы киноман!!!');
} else {
  console.log('Произошла ошибка!!!');
}
console.log(PersonalMovieDB);