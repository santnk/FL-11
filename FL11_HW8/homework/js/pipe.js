function pipe(x) {
  for (let i = 1; i < arguments.length; i++) {
    x = arguments[i](x);
  }
  return x;
}

pipe(6, addOne);

function addOne(x) {
  return 1 + x;
}