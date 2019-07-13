function isInteger(a) {
  if ((a ^ 0) === a) {
    console.log(true);
  } else {
    console.log(false);
  }
}

isInteger(5);