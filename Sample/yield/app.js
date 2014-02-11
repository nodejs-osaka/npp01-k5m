function *getAllSquareNumbers() {
  for (var i = 1; ; i++) {
    yield i * i;
  }
}

var generator = getAllSquareNumbers();
console.log(generator.next().value); // Outputs '1'
console.log(generator.next().value); // Outputs '4'
console.log(generator.next().value); // Outputs '9'
console.log(generator.next().value); // Outputs '16'
