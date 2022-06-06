// const character = "ilhan";

// console.log(character);

// const inputs = document.querySelectorAll("input");

// console.log(inputs);

// inputs.forEach((element) => {
//   console.log(element);
// });

// let numbers = [2, 4, 5];

// numbers.push(34);

let mixType = [2, 4, "ilhan"];
mixType.push("miray");

let mixType2: (number | boolean | string)[] = [];
mixType2.push("miray");
mixType2.push(false);
console.log(mixType2);

let myObject: {
  name: string;
  age: number;
  skills: string[];
};

myObject = {
  name: "ilhan",
  age: 33,
  skills: ["java"],
};

let firstName: string;
console.log(myObject);

let uid: string | number;
