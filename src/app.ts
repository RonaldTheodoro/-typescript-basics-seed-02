function sumAll(msg: string, ...arr: number[]) {
  console.log(msg);
  return arr.reduce((prev, next) => prev + next);
}

const sum = sumAll('xelo', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

console.log(sum);
