// console.log("Hello this is DOM2");

// const newelement = document.createElement("h2");
// newelement.id = "second";
// console.log(newelement);

// newelement.textContent = "This is created using DOM methods";
// selecting the first element
// const firstelement = document.getElementById("first");
// firstelement.after(newelement);

// creating the next element
// const element2 = document.createElement("h3");
// element2.id = "third";
// element2.textContent = "This is the new element for the third element";

// const firstelement = document.getElementById("first");
// firstelement.after(element2);
//
// const list = document.createElement("li");
// list.textContent = "Milk";

// const a = document.getElementById("listing");
// a.appendChild(list);

const arr = ["Milk", "Eggs", "Bread", "Roti", "Butter"];

const ul = document.getElementById("listing");
const fragments = document.createDocumentFragment();

// for (let food of arr) {
//   const li = document.createElement("li");
//   li.textContent = food;
//   fragments.appendChild(li);
// }

// ul.appendChild(fragments);

// const fragments = document.createDocumentFragment(); \

// for (let food of arr) {
//   const li = document.createElement("li");
//   li.textContent = food;
//   fragments.appendChild(li); // Append to fragment in memory
// }
// ul.appendChild(fragments); // Single append to DOM


