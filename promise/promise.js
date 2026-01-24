// console.log("Hello world start");

//  code

// const p1 = fetch("https://api.github.com/users");

//  console.log(p1);

// const p2 = p1.then((response) => {
//       console.log("Response received");
//        console.log(response.json());
//     return response.json();
// });

// p2.then((response => {
//     console.log(response);
// }))

// console.log("Hello world end");

//  chaining of promises

// fetch("https://api.github.com/users")
//   .then((responses) => {
//     console.log("Response received");
//     return responses.json();
//   })
//   .then((data) => {
//     console.log(data);
//   });

// javascript object

// const j1 = {
//   name: "Jhon",
//   profession: "developer",
//   age: 22,
// };

//  convet to json

// const j2 = JSON.stringify(j1);

// console.log(j2);

// convert json to javascript object
// const j3 = JSON.parse(j2);

// console.log(j3);

// fetch("https://api.github.com/users")
//   .then((response) => {
//     if (!response.ok) {
//       new Error("Data is not found in the server.");
//     }
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//     const first = document.getElementById("first");
//     const img = document.createElement("img");
//     img.src = data[0].avatar_url;
//     first.appendChild(img);
//   })
//   .catch((error) => {
//     // console.log("The error is: " + error);
//     const first = document.getElementById("first");
//     const h2 = document.createElement("h2");
//     h2.innerText = "The error is: " + error;
//     first.appendChild(h2);
//   });

// const p1 = new Promise((resolve, reject) => {
//   resolve("Promise resolved successfully");
// });

// // console.log(p1);

// p1.then((response) => {
//   console.log(response);
// });

// const p1 = new Promise((resolve, reject) => {
//   resolve("Promise resolved successfully");
// });

// p1.then((response) => {
//   console.log(response);
// }).catch((error) => {
//   console.error(error);
// });

async function github() {
  const response = await fetch("https://api.github.com/users");
  const data = await response.json();
  console.log(data);
}

github();

console.log("Hello world");
