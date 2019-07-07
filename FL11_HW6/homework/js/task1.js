let a1, a2, b1, b2, c1, c2;
let half = 2;
a1 = +prompt('Enter the value of A1 coordinate', '');
a2 = +prompt('Enter the value of A2 coordinate', '');
b1 = +prompt('Enter the value of B1 coordinate', '');
b2 = +prompt('Enter the value of B2 coordinate', '');
c1 = +prompt('Enter the value of C1 coordinate', '');
c2 = +prompt('Enter the value of C1 coordinate', '');

const x = (a1 + b1) / half;
const y = (a2 + a2) / half;

if (c1 === x && c2 === y) {
    console.log(true);
} else {
    console.log(false);
}