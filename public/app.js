"use strict";
// const anchor = document.querySelector("a")!;
// // Normalde bu sekilde yazarsan hata alirsin cunku ts bilmiyor ki anchor var ya da yok.
// // console.log(anchor.href);
// // Bunun yerine bu sekilde yazarak bu hatadan kurtulabilirzi.
// // if (anchor) {
// //   console.log(anchor.href);
// // }
// // ya da ifadenin sonuna exclamation mark ekleyerek kesin oldugumuzu belirtebiliriz.
// console.log(anchor.href);
const form = document.querySelector(".new-item-form");
console.log(form.children);
//inpits
const type = document.querySelector("#type");
const toFrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
});
