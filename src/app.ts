//interfaces
interface IsPerson {
  name: string;
  age: number;
  speak(a: string): void;
  spend(a: number): number;
}

const me: IsPerson = {
  name: "ilhan",
  age: 44,
  speak(text: string): void {
    console.log(text);
  },
  spend(amount: number): number {
    console.log("I spent", amount);
    return amount;
  },
};

import { Invoice } from "./classes/Invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payment.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";

let docOne: HasFormatter;
let docTwo: HasFormatter;

let docs: HasFormatter[] = [];

docOne = new Invoice("ilhan", "web work", 300);
docTwo = new Invoice("miray", "IG work", 400);

docs.push(docOne);
docs.push(docTwo);

// console.log(docs);

const invOne = new Invoice("ilhan", "work on the website", 250);
invOne.format();
const invTwo = new Invoice("miray", "work on the instagram", 300);
// const invOne = new Invoice("ilhan", "work on the website", 250);
// console.log(invOne, invTwo);
let invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);
// Not allowed because it is protected property. It can be done only inside class.
// invOne.client = "Emir";
// console.log(invoices);
// Not allowed because it is protected property. It can be done only inside class.
// console.log(invOne.client);

const form = document.querySelector(".new-item-form") as HTMLFormElement;
// console.log(form.children);

//inputs
const type = document.querySelector("#type") as HTMLSelectElement;
const toFrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

// list template instance
const ul: HTMLUListElement = document.querySelector("ul.item-list")!;
const list = new ListTemplate(ul);

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  let doc: HasFormatter;
  if (type.value === "invoice") {
    doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
  } else {
    doc = new Payment(toFrom.value, details.value, amount.valueAsNumber);
  }
  // console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
  // console.log(doc);

  list.render(doc, type.value, "end");
});

// TUPLES
let arr = ["ilhan", 44, true];
arr[0] = false;
arr[1] = "ilhan";
arr = [44, false, "ilhan"];

let tup: [string, number, boolean] = ["ilhan", 44, false];
tup[2] = true;
