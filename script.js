'use strict';

let arr = ['4463689', '834763', '2976842', '186352365', '4863486', '7450222', '245693068'];

arr.forEach((num) => {
    if (num.startsWith('2') || num.startsWith('4')) {
        console.log(num);
  }
});


function numb(n) {
    for (let i = 2; i * i <= n; i === 2 ? i++ : i += 2) {
        if (n % i === 0) {
            return false;
        }
    }
    return n > 1;
  }

const res = [...Array(101)].reduce((a, _, i) => a.concat(numb(i) ? console.log(`Делители числа ${i}: 1 и ${i}`) : []) , []).join('\n');
