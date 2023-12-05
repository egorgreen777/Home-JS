////....- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б...////
let rectangleSquare = (a,b) => a * b;
console.log(rectangleSquare(10,10));

////....- створити функцію яка обчислює та повертає площу кола з радіусом r////
let circleSquare = (r) => r * r * Math.PI;
console.log(circleSquare(45));

/////.....- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r//////
let cylinderSquare = (h,r) => 2 * Math.PI * r * r * h;
console.log(cylinderSquare(10,10));

/////- створити функцію яка приймає масив та виводить кожен його елемент////
let massiOFfArr =  (...rest) => console.log(rest);
massiOFfArr(...[29,31,'ZLOY',[]]);

//////- створити функцію яка створює параграф з текстом. Текст задати через аргумент////
let newParagraph = (p)=>document.write('<p>${p}</p>');
newParagraph("Glory to Ukraine");

/////- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий////
let listUl = (text)=> document.write
    (`<ul> 
        <li> ${text} </li> 
        <li> ${text} </li> 
        <li> ${text} </li> 
    </ul>`);
listUl("Glory to Ukraine");

/////- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)////
let ulThreeelements = (text,num) => {
    document.write('<ul>');
    for (let i = 0;i < num; i++){
        document.write('<li>${text}</li>');
    }
    document.write('</ul>');
}
ulThreeelements("Glory to heroes",6);

///- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список////
let arrymix = (arr) => {
    document.write('<ul>');
    for (const item of arr){
        document.write('<li>${item}</li>');
    }
    document.write('</ul>');
}
arrymix([23,1488,'bla bla',true]);

////- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.////

const users = [
    {id:1,name:'egor',age:32},
    {id:1,name:'vasy',age:18},
    {id:1,name:'oleg',age:22},
    {id:1,name:'vitaly',age:33},
    {id:1,name:'devid',age:37}
];
let objArr = (arr) => {
    for (const user of arr) {
        document.write('<div>${user.id} - ${user.name} - ${user.age}</div>')
    }
}
objArr(users);

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13




