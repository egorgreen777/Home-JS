console.log('egor.green777');
console.log('27.12.1990');

//////------Test-----////////

///number
///string
///booleon

// var a;
// a = 'hello okten';

// var a = 'hello okten';

// {
//     let a = 'hello okten';
//     var a = 'hello world';
//
// }
//
// console.log(b);
// console.log(a);

// const A = 'TEST';
// console.log(A);

// const PI = 3.14;
// console.log(PI);
//
// let a = 'zloy';
// console.log(a);
// a = 'ufc';
// console.log(a);

//////----Типи данних----//////
// let a = 'hello World';
// a = '5';
// console.log(typeof a , a);
//
// let b = 100500;
// console.log(typeof b,b);

// let c = true;
// console.log(c); ////--Правдиве ствердження--////

// let c = false;
// console.log(c);  ////--НЕ являється правдивим--////


/////---Типи данних (частина друга)---/////
// let a = '"ZLOY"';
// let b = "'ZLOY'"; /////----Стрінговва змінна----//////
// console.log(a,b);


// let c = ' ';
// console.log(typeof c);  ////----Шаблонний тип стрінгової змінної-----/////

////-----Конкатанація----(це процес з'єднання стрінг в одну єдину СТРІНГУ в 'речення')---//////
// let green = 'hello';
// let red = 'my name is Egor';
// let msg = green + '' + red;
// console.log(msg);
// let msg2 = `${green} ${red}`;
// console.log(msg2);

/////----Числові значення----/////////
// let a  =100500;
// console.log(a);  ///---Обчісленні '----////
//
// let b = 3.12344449;
// console.log(b); ////----Числа с плаваючою крапкою  'Floot'----/////
//
// console.log(10 + 20);
// console.log(10 - 20);
// console.log(10 * 20);
// console.log(10 / 20);
//
//
// console.log(0.1 + 0.2);
//
//
// let big = 1233444558559444898584n;
// console.log(big);
//
// let n1 = 100;
// let n2 = 200;
// console.log(n1 + n2);


///////-----boolevi типи данних-----//////
// let a = true;
// console.log(true);
//
// let a1 = true;
// console.log(typeof a1);

///---Оператори дорівнюваності (> <, >=,<=,=='еквівалентно', !='Не еквівалентно' - за допомогою цих операторів
////можно порівнювати між собою 'стрінги','числа'. І визначати чи еквівалентні між собою 'більщі','менщі'.
// let a = true;
//
// // console.log(10 > 5);
// // console.log(10 > 20);
// // console.log(10 === 10);
// // console.log(10 !== 10);
//
// console.log(5 === '5');
// console.log('asd' > 'qwe');
// console.log(5 !== '6');

////----Перетворювання одних типів данних на інщі(Конвертнути стрінгове в числове та навпаки і т.д. ta boolen---//////
// console.log( typeof (100500 + ''));
// console.log(100 +200 + '');
// console.log('' + 100 + 200);

// console.log(+'100500asd');
// console.log('100500asd');
// console.log(parseInt('100500asd'));  //////----Цілечісленні значення----/////
// console.log(parseFloat('100500.123'));  //////----Значення с плаваючою крапкою-----/////



////////////////////////---------Число до Булевa----------//////////////////////
// console.log(!!-1000); ////---true----//////
// console.log(!!0); /////----false-----/////// ---Томущо НУЛЬ - це нічього!!!!---Будуть інщі інтерпритаціі--/////
//
// console.log(!!'asd'); ////---Це приведення до булеввого типу---відповідно ---true---////
// console.log(!!''); ////---false---////---Тут НІЧЬОГО--/////
//
// console.log(!!'0'); //-Якщо НУЛЬ зробити в якості стрінги - це true// томущо це вже напис - символ, і він має ask код//


// ////////////////--------Приведення Булевого значення до (числа, стрінги, і т.д.)---------////////////
// console.log(true + ''); ////Приведення булевого значення до стрінги/////--true---/////
// console.log(+true); ///То ми оримаєм числе (true костується до одиниці, false до нуля)--////
// console.log(100 + true);


// let n = 100;
// let s = 'asd';
// let b = true;
//
// console.log(typeof n);
// console.log(typeof s);
// console.log(typeof b);
//
// let arr = [11,22,33,true];
// let user = {
//     name: 'Egor',
//     age: 32
// }
//
// console.log(typeof arr);
// console.log(typeof user);
//
// function asd() {
//
// }
//
// console.log(typeof asd);

let x;
console.log(x);
console.log(typeof undefined); /////---Ця змінна задекларованна --не визначенна-----////
console.log(typeof null);
console.log(NaN); //--Це число, число з плаваючою крапкою,яке не дорівнює жодному числу навіть собі.---///
console.log([]/''); ///--Генерація NaN---//// Ділення масива на стрінгу ////


/////////////----------true--------------///////////////
// console.log(!!100);
// console.log(!!-100);
// console.log(!!'asd');

////////////----------false----------------/////////////
console.log(!!0); ///--Те що ссобою являє нічого воно автомотично приводиться Булевами операторами ---false--////
console.log(!!null);
console.log(!!undefined);
console.log(!!'');


