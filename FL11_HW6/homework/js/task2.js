const a = +prompt('Write here the value for A side length');
const b = +prompt('Write here the value for B side length');
const c = +prompt('Write here the value for C side length');

if (a < b + c && b < a + c && c < a + b) {
  console.log('Triangle exist');
  if (a === b && a === c && b === c) {
      console.log('Equivalent triangle');
  } else if (a === b && a !== c || a === c && a !== b || b === c && b !== a) {
      console.log('Isosceles triangle');
  } else {
      console.log('Normal triangle');
  }
} else {
  console.log('Triangle doesn’t exist');
}