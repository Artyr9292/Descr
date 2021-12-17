//12.Практика,ч.1.Начинаем создавать приложение

//Делаем домашку

let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", '');
//console.log('numberOfFilms');


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


//2 домашка
//1 задание(цикл комбинируется с условием)
for (let i = 0; i < 2; i++) {
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
// ****************** //

console.log(personalMovieDB);

//2домашка 4 задание



