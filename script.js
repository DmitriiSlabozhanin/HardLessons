'use strict';

let letters = document.getElementById("change"),
back = document.getElementById("background");

letters.addEventListener('click', () => {
let r = Math.floor(Math.random() * (256)),
    g = Math.floor(Math.random() * (256)),
    b = Math.floor(Math.random() * (256));
    let color = '#' + r.toString(16) + g.toString(16) + b.toString(16);
        document.body.style.background = color;
        document.querySelector('p').style.color = color;

    });


