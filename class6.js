// function setTimeoutPromisified(duration) {
//     return new Promise(function (resolve) {
//         setTimeout(resolve, duration);
//     });
// }

// //  settimeout => promodified timeout

// function callback() {
//     console.log("1 second has passed . ");
// }

// setTimeoutPromisified(1000).then(callback);

// setTimeout(function () {
//     console.log("hi");
//     setTimeout(function () {
//         console.log("hello");
//         setTimeout(function () {
//             console.log("5 seconds have passed")
//         }, 5000);
//     }, 3000);
// }, 1000);

// console.log("Outside call back hell");


let str1 = "DEEPU";
console.log(str1);

let results = str1.split("");
console.log(results);

let ans = results.sort();
console.log(ans);

let ans1 = ans.join("");
console.log(ans1);

let ans2 = ans1.toLowerCase();
console.log(ans2);




