

// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача;

let arr;
arr = [123,234,236,-123,0,true,'asiugahd',-983,'box','element'];
console.log(arr);
console.log(arr [0]);
console.log(arr [1]);
console.log(arr [2]);
console.log(arr [3]);
console.log(arr [4]);
console.log(arr [5]);
console.log(arr [6]);
console.log(arr [7]);
console.log(arr [8]);
console.log(arr [9]);
console.log(arr.length);
///////-----відповідь на перше питання-----////////

let books1 = {
    id: 1,
    title: 'Forrest Gump',
    pageCount:876,
    genre :'Story',
}

console.log(books1);
console.log(books1.id);

let books2 = {
    id: 1,
    title: 'Green Mile',
    pageCount: 634,
    genre: 'Dramma'
}

console.log(books2);
console.log(books2.id);

let books3 = {
    id:1,
    title: 'Knockin on Heaven',
    pageCount: 781,
    genre: 'Dramma'
}

console.log(books3);
console.log(books3.id);

///////////-------На друге питання--------//////////



let books4 = {
    id:1,
    title:'They called us soldiers',
    pageCount:829,
    genre: 'Story'
}
let authors1 = {
    name:'Stephen King',
    age:57
}
console.log(books4);
console.log(authors1);

let books5 = {
    id:1,
    title:'The Last Samurai',
    pageCount: 932,
    genre:'Dramma'
}
let authors2 = {
    name: 'John Logan',
    age: 62
}
console.log(books5);
console.log(authors2);

let books6 = {
    id:1,
    title:'Kobzar',
    pageCount: 530,
    genre:'Dramma'
}
let authors3 = {
    name:'Taras Shevchenko',
    age: 162
}
console.log(books6);
console.log(authors3);
/////////-------На третеє питання-----////////////

let users = [
    {id:1,name:'egor',username:'zloy',password:14765},
    {id:2,name:'vasya',username:'bob',password:22330},
    {id:3,name:'olya',username:'yary',password:32441},
    {id:4,name:'oleg',username:'shustrey',password:42242},
    {id:5,name:'oleg',username:29,password:76307},
    {id:6,name:'oleg',username:29,password:34789},
    {id:7,name:'oleg',username:29,password:11286},
    {id:8,name:'oleg',username:29,password:56783},
    {id:9,name:'oleg',username:29,password:89651},
    {id:10,name:'oleg',username:29,password:55736}
];
console.log(users);
let user0 = users[5];
console.log(users[0]['password']);
console.log(users ['1']['password']);
console.log(users['2']['password']);
console.log(users['3']['password']);
console.log(users['4']['password']);
console.log(users['5']['password']);
console.log(users['6']['password']);
console.log(users['7']['password']);
console.log(users['8']['password']);
console.log(users['9']['password']);

////////--------На четверте--------///////////


//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
let x = 5;
console.log('Невірно');

let a = 1;
console.log(a);


// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

let time = +prompt('Введіть число від 0 до 59');
console.log(typeof time);
switch (time){
    case time > 60:
        console.log('Число більше 60. !!!!');
        break;
    case time =45:
        console.log('Число 4 четверті');
        break;
    case time =30:
        console.log('Число 3 четверті');
        break;
    case time =15:
        console.log('Число 2 четверті');
        break;
    case time >0:
        console.log('Число 1 четверті');
    default:
        console.log('Ваше число не вірне');

}

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.]
//
//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, nul і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)
//
//


//     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

