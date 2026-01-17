// function greeting() {
//   console.log("Hello this is a greeting fucntion!");
// }

// greeting();

// function createcounter() {
  
//   function increment() {
//     console.log("This is the counter function");
//   }
//   return increment;
// }

// const counter = createcounter();
// counter();

function ab() {
  let count = 0;
  function bc(){
    count++;
    return count;
  }
  return bc;
}

const counter = ab();
console.log(counter());
console.log(counter());
console.log(counter());