let num = 10;
let factorial = 1;
let i = 1;

while (i <= num) {
  factorial *= i;
  if (i === 10) {
    break;
  }
  i++;
}

console.log(`El factorial de 10 es ${factorial}`);