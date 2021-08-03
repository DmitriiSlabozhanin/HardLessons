

'use strict';

let lang = prompt("Напишите ru или en", "ru");

if (lang === "ru") {
    console.log("Понедельник, вторник, среда, четверг, пятница, суббота, воскресенье");
} else if (lang === "en") {
    console.log("Monday, Tuesday, Thirsday, Wednesday, Friday, Saturday, Sunday");
} else {
    console.log("Что-то пошло не так");
}

switch (lang) {
    case "ru":
        console.log("Понедельник, вторник, среда, четверг, пятница, суббота, воскресенье");
        break;
    case "en":
        console.log("Monday, Tuesday, Thirsday, Wednesday, Friday, Saturday, Sunday");
        break;
    default:
        console.log("Что-то пошло не так");
}

let langArray = [];
langArray['ru'] = ['Понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];
langArray['en'] = ['Monday', 'Tuesday', 'Thirsday', 'Wednesday', 'Friday', 'Saturday', 'Sunday'];
console.log(langArray[lang]);

let namePerson = prompt("Введите одно из имён: Артем, Максим или любое другое", "Артем");

let message = (namePerson === 'Артем') ? 'директор' : 
(namePerson === 'Максим') ? 'преподаватель' :
'студент';

alert(message);
console.log(message);