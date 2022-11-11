const ar1 = [1, 2, 3];
const ar2 = ar1;
const ar3 = [...ar1];

ar1.push(4);

console.log(ar1, ar2, ar3);

function adder(a, b, c) {
  return a + b + c;
}

adder(ar1);
adder(...ar1);
