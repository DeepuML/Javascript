// class Rectangle {
//     constructor(height, width, color) {
//         this.height = height;
//         this.width = width;
//         this.color = color;
//     }

//     area() {
//         const area = this.height * this.width;
//         return area;
//     }

//     paint() {
//         console.log(`Paint this area with the ${this.color}`);
//     }
// }


// const rect = new Rectangle(2, 3, `red`);
// const area = rect.area();
// const paint = rect.paint();

// const rect1= {
//     width: 2,
//     height: 3
// }


// function area(rect1) {
//     return rect1.width * rect1.height;
// }
// area(rect1);


// const now = new Date();
// console.log("This is the date: ", now.getDate());
// console.log("This is the day: ", now.getDay());
// console.log("This is the year: ", now.getFullYear());
// console.log("This is the time: ", now.getTime());
// console.log("This is the month: ", now.getMonth());
// console.log("This is the minute: ", now.getMinutes());
// console.log("This is the miliseconds: ", now.getMilliseconds());

// const map = new Map();
// map.set('name', 'Deepu');
// map.set('age', 30);
// console.log(map.get('name'));
// console.log(map.get('age'));

// class Square {
//     constructor(side, color) {
//         this.side = side;
//         this.color = color;
//     }

//     area() {
//         const area = this.side * this.side;
//         return area;
//     }

//     perimeter() {
//         const perimeter = 4 * this.side;
//         return perimeter;
//     }

//     color() {
//         console.log("This is the color of the square: " + this.color);
//     }
// }

// const squ = new Square(2, 'black');
// console.log(squ.area());
// console.log(squ.perimeter());
// console.log(squ.color);

// function setTimeoutPromisified(ms) {
//     let p = new Promise(resolve => setTimeout(resolve, ms));
//     return p;
//     // it is returning you the object of promise class
// }

// function callback() {
//     console.log("3 seconds have passed..");
// }

// setTimeoutPromisified(3000).then(callback);

// function greet() {
//     console.log("HI");
// }

// function setTimeoutPromisified(ms) {
//     return new Promise();
// }

// let p = setTimeoutPromisified(5000);
// console.log(p);

// console.log(1);

// function waitfor3s(myvariable) {
//     setTimeout(myvariable, 3000);
// }

// console.log(2);

// function main() {
//     console.log("Hi");
// }

// console.log(3);

// waitfor3s(main); callback apporach
// function setTimeoutPromisified(ms) {
//     return new Promise();
// }

// function greet() {
//     console.log("Hi EveryOne");
// }

// let p = setTimeoutPromisified(3000);
// console.log(p);

// function setTimeoutPromisified(ms) {
//     return new Promise((resolve) => {
//         setTimeout(resolve, ms);
//     });
// }

// function greet() {
//     console.log("Hi EveryOne");
// }

// let p = setTimeoutPromisified(3000);
// console.log(p); // Logs: Promise { <pending> }

// p.then(greet);  // Calls greet after 3 seconds

// function promiseCallback(resolve) {
//     setTimeout(resolve, 3000);
// }


// function main() {
//     console.log("Hi this is deepu");
// }

// promiseCallback(main)

// function greet(resolve) {
//     setTimeout(resolve, 1000);
// }

// function greet1(resolve) {
//     setTimeout(resolve, 3000);
// }

// function main() {
//     console.log("HI");
// }

// greet(main);

// function main1() {
//     console.log("Hello");
// }

// greet1(main1);

// function waitfor10s(resolve) {
//     setTimeout(resolve, 10000);
// }

// function setTimeoutPromisified() {
//     return new Promise(waitfor10s);
// }

// function main() {
//     console.log("main is called");
// }

// setTimeoutPromisified().then(main)   // Promisified version

  
// const fs = require("fs");

// function readthefile(sendTheFinalValue) {
//     fs.readFile("1.txt", "utf-8", function (err, data) {
//         sendTheFinalValue(data);
//     })
    
// }

// function readfile(filename) {
//     return new Promise(readfile);
// }

// let p = readfile();

// function callback(contents) {
//     console.log(contents);
// }

// p.then(callback);

// const fs = require("fs");

// function readfile(filename) {
//     return new Promise(function (resolve, reject) {
//         fs.readFile(filename, "utf-8", function (err, data) {
//             if (err) {
//                 reject(err);
//             } else {
//                 resolve(data);
//             }
//         });
//     });
// }

// function callback(contents) {
//     console.log(contents);
// }

// let p = readfile("1.txt");
// p.then(callback).catch(err => console.error("Error reading file:", err));
