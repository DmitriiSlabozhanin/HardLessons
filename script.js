'use strict';

function countSymbol(str)
{
  if (typeof str !== 'string') {
    alert('Переданное значение не является строкой!');
    return;
  }
  str = str.trim(); 
  return str.length > 30 ? str.slice(0, 30) + '...' : str;
}

//let result = countSymbol(1111);
let result = countSymbol(" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labor ");
console.log(result);