function dota() {
  "use strict";
}
dota();

let NumberOfFilms;

function start() {
  NumberOfFilms = +prompt("Сколько фильмов Вы уже посмотрели?",
    "Введите только число");
  while (
    NumberOfFilms == "" ||
    NumberOfFilms == null ||
    isNaN(NumberOfFilms)
  ) {
    NumberOfFilms = +prompt("Сколько фильмов Вы уже посмотрели?", "");
  }
}
start();
const PersonalMovieDB = {
  count: NumberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};


function rememberMyFilms() {
  let i = 0;
  while (i < 2) {
    const a = prompt("Один из последних просмотренных фильмов?", ""),
      b = prompt("На сколько оцените его?", "");
    PersonalMovieDB.movies[a] = b;
    i++;
    if (a != "" && a != null && b != "" && b != null && a.length < 50) {
      PersonalMovieDB.movies[a] = b;
    } else {
      i--;
    }
  }
}
rememberMyFilms();



function detectPersonalLvl() {
  if (PersonalMovieDB.count <= 10) {
    console.log("Просмотрено довольно мало фильмов!");
  } else if (PersonalMovieDB.count < 30) {
    console.log("Вы класичесский зритель");
  } else if (PersonalMovieDB.count >= 30) {
    console.log("Вы киноман!!!");
  } else {
    console.log("Произошла ошибка!!!");
  }
}
detectPersonalLvl();

function showMyDB(hidden) {
  if (!hidden) {
    console.log(PersonalMovieDB);
  }
}

showMyDB(PersonalMovieDB.privat);
let a, b, c;

function writeYouGenres() {
  for (let i = 1; i <= 3; i++) {
    const genres = prompt(`Ваш любимый жанр ${i}`);
    PersonalMovieDB.genres[i - 1] = genres;
  }
}
writeYouGenres();