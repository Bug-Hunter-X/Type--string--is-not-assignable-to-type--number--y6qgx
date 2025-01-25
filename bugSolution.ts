function add(a: number, b: number): number {
  return a + b;
}

function add(a: string, b: string): string {
  return a + b;
}

let result1 = add(1, 2); // result1 is a number
let result2 = add("hello", "world"); // result2 is a string