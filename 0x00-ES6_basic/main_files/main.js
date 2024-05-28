function sum(...theArgs) {
  for (const arg of theArgs) {
    console.log(arg);
  }
}

const x = sum('paper', 'rashisky', 'legolas');
console.log(x);
