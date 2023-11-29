////....- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б...////
function rectangleSquare(a ,b) {
    return a * b;

}
let res = rectangleSquare(10,10);
console.log(res);
////....- створити функцію яка обчислює та повертає площу кола з радіусом r////

function circleSquare(r){
    // let s = Math.PI * r * 2;
    return r * r * Math.PI;
}

result = circleSquare(45);
console.log(result);

/////.....- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r//////

function cylinderSquare (h,r) {
    return 2 * Math.PI * r * r * h;

}
res = cylinderSquare(10,10);
console.log(res);

/////- створити функцію яка приймає масив та виводить кожен його елемент////

function massiOFfArr (...items) {
    for (const massi of items){
        console.log(massi)
    }
}
massiOFfArr(...[29,31,'ZLOY',[]]);

//////- створити функцію яка створює параграф з текстом. Текст задати через аргумент////
function newParagraph (p){
    document.write('<p>${p}</p>');
}
newParagraph("Glory to Ukraine");
/////- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий////
function listUl (text){
    document.write(`<ul>
        <li> ${text} </li>
        <li> ${text} </li>
        <li> ${text} </li>
    </ul>`);
}
listUl("Glory to Ukraine");

/////- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)////

function ulThreeelements (text,num){
    document.write('<ul>');
    for (let i = 0;i < num; i++){
        document.write('<li> ${text} </li>');
    }
    document.write('</ul>');
}
ulThreeelements("Glory to heroes",6);

///- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список////
const kitArr = [true,29,"Glory to Ukraine"];
function arrymix(element){
    document.write('<ul>');
    for (const elementElement of element){
        document.write('<li>' + '${elementElement}' + '</li>');
    }
    document.write('</ul>');
}
arrymix(kitArr);