const ar = [1, 2, 3];

function addOne(n) {
  return n + 1;
}

const forEachResult = ar.forEach(addOne)
console.log(forEachResult)

const a = addOne(10)
console.log(a)

const newArray = ar.map(addOne);
console.log(newArray);
