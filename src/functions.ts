let greet = () => {
  console.log("hello, world");
};

let myFunction: Function;

myFunction = () => {
  console.log("hello, again");
};

const add = (a: number, b: number, c: number | string = 10) => {
  console.log(a + b);
  console.log(c);
};

add(5, 10);

const minus = (a: number, b: number) => {
  return a - b;
};

let result = minus(10, 7);

let salute: (a: string, b: string) => void;
salute = (name: string, greetings: string) => {
  console.log(`${name} says ${greetings}`);
};
