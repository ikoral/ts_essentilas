// const anchor = document.querySelector("a")!;

// // Normalde bu sekilde yazarsan hata alirsin cunku ts bilmiyor ki anchor var ya da yok.
// // console.log(anchor.href);

// // Bunun yerine bu sekilde yazarak bu hatadan kurtulabilirzi.
// // if (anchor) {
// //   console.log(anchor.href);
// // }

// // ya da ifadenin sonuna exclamation mark ekleyerek kesin oldugumuzu belirtebiliriz.
// console.log(anchor.href);

const form = document.querySelector(".new-item-form") as HTMLFormElement;
console.log(form.children);

//inpits
const type = document.querySelector("#type") as HTMLSelectElement;
const toFrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
});
