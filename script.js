'use strict';

let days = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "<i>Суббота</i>", "<i>Воскресенье</i>"];
    
let toDay = (6 + new Date().getDay()) % 7;
days[toDay] = `<b>${ days[toDay] }</b>`;
  
document.body.insertAdjacentHTML("beforeEnd", days.join("<br>"));
