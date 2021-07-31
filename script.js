let number = 266219,
    output = [],
    sNumber = number.toString();

for (var i = 0, len = sNumber.length; i < len; i += 1) {
    output.push(+sNumber.charAt(i));
}

console.log(output);

var total = 1;
    for (var i = 0, n = output.length; i < n; ++i){
    total *= output[i];
}

console.log(total);

let all = total ** 3;

console.log(all);

let finish = Number((all).toString().split('').slice(0, 1));
let finish2 = Number((all).toString().split('').slice(1, 2));

console.log(finish + "" + finish2);