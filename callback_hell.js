// zomato application

function placeOrder(Callback) {
  console.log("Your payment is in progress");
  setTimeout(() => {
    console.log("Your Payment is done.");
    Callback();
  }, 3000);
}

function OrderFood(Callback) {
  setTimeout(() => {
    console.log("Your order is preparation is done.");
    Callback();
  }, 3000);
}

function pickupOrder() {
  console.log("Your food is ready for the pickup");
  setTimeout(() => {
    console.log("You order is on the way");
  }, 3000);
}

// calling the functions = > callback hell

placeOrder(function() {
  OrderFood(function() {
    pickupOrder();
  });   
});