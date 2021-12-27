//12.Практика,ч.1.Начинаем создавать приложение

//Делаем домашку
'use strict';

//let numberOfFilms; //глобальная переменная

//18.Практика,ч.3.Используем функции.
//1 домашка


// ************************************* //


const personalMovieDB = {
    count: 0, //изначально количество фильмов будет 0
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() { //можно применить стрелочную функцию
        personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", '');
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", '');
        }
    },
    rememberMyFilms: function() {
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
    },
    detectPersonalLevel: function() {
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
    },
    showMyDB: function(hidden) {
        if (!hidden) { //если наша база данных скрыта то мы ее показываем
            console.log(personalMovieDB);  
        }
    },
    toggleVisibleMyDB: function() {
        if(personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i < 2; i++) {
        //for (let i = 1; i <= 3; i++) {
            /*
            let genre = prompt(`Ваш любимый жанр под номером ${i}`);

            if (genre === ''  || genre == null) {
                console.log('Вы ввели некорректные данные или неввели их вообще');
                i--;
            } else {
                personalMovieDB.genres[i - 1] = genre;
            }
            */

            //2 вариант решения нашей задачки, той что выше(которая закомментирована)
            let genres = prompt(`Введите ваши любимые жанры через запятую`).toLowerCase();

            if (genres === ''  || genres == null) {
                console.log('Вы ввели некорректные данные или неввели их вообще');
                i--;
            } else {
                personalMovieDB.genres = genres.split(', ');
                personalMovieDB.genres.sort();
            } // введите в консоли разработчика в браузере personalMovieDB.writeYourGenres(); увидите 
        }                    //как там отображаются наши данные

        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        }); //можем протестить выведя в консоли браузера personalMovieDB.writeYourGenres();
    } // выведим в консоли personalMovieDB и увидим что все 3 свойства в браузере сохранились Array(3)
};

// ****************** //
