//12.Практика,ч.1.Начинаем создавать приложение

//Делаем домашку
'use strict';

let numberOfFilms; //глобальная переменная

//18.Практика,ч.3.Используем функции.
//1 домашка
function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", '');
    }
}

start();

// ************************************* //


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


//3домашка(практика ч.3) 1 задание
function rememberMyFilms() {
    for (let i = 0; i < 2; i++) { //2 домашка.1 задание(цикл комбинируется с условием)
        const a = prompt('Один из последних просмотренных фильмов?', ''),
              b = prompt('На сколько оцените его?', '');
    
        // 2 домашка/2задание
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
        // *********  
    }
}
//rememberMyFilms();

function detectPersonalLevel() {
    //2 домашка/3задание
  if (personalMovieDB.count < 10) {
    console.log("Просмотров довольно мало фильмов");
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Вы классический зритель");
  } else if (personalMovieDB.count >= 30){
    console.log("Вы киноман");
  } else {
    console.log("Произошла ошибка");
  }
}
//detectPersonalLevel();

//3домашка(практика ч.3) 1 задание
function showMyDB (hidden) {
    if (!hidden) { //если наша база данных скрыта то мы ее показываем
        console.log(personalMovieDB);  
    }
}

showMyDB(personalMovieDB.privat);  

//3домашка.3 задание.
function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}  
writeYourGenres();

// ****************** //
