const me = {
    name: "ilhan",
    age: 44,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log("I spent", amount);
        return amount;
    },
};
import { Invoice } from "./classes/Invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payment.js";
let docOne;
let docTwo;
let docs = [];
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
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
// Not allowed because it is protected property. It can be done only inside class.
// invOne.client = "Emir";
// console.log(invoices);
// Not allowed because it is protected property. It can be done only inside class.
// console.log(invOne.client);
const form = document.querySelector(".new-item-form");
// console.log(form.children);
//inputs
const type = document.querySelector("#type");
const toFrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
// list template instance
const ul = document.querySelector("ul.item-list");
const list = new ListTemplate(ul);
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let doc;
    if (type.value === "invoice") {
        doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(toFrom.value, details.value, amount.valueAsNumber);
    }
    // console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
    // console.log(doc);
    list.render(doc, type.value, "end");
});
//ENUMS
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["BOOK"] = 0] = "BOOK";
    ResourceType[ResourceType["AUTHOR"] = 1] = "AUTHOR";
    ResourceType[ResourceType["FILM"] = 2] = "FILM";
    ResourceType[ResourceType["DIRECTOR"] = 3] = "DIRECTOR";
    ResourceType[ResourceType["PERSON"] = 4] = "PERSON";
})(ResourceType || (ResourceType = {}));
const myDoc2 = {
    uid: 2,
    resourceType: ResourceType.BOOK,
    data: { name: "name of the wind" },
};
const myDoc3 = {
    uid: 2,
    resourceType: ResourceType.FILM,
    data: ["test", "milk"],
};
console.log(myDoc2);
console.log(myDoc3);
