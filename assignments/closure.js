// ==== Challenge 1: Write your own closure ====
// Write a closure of your own creation.
// Keep it simple! Remember a closure is just a function
// that manipulates variables defined in the outer scope.
// The outer scope can be a parent function, or the top level of the script.

function country(countryName) {
  // console.log(countryName);
  console.log(`People in the ${countryName} like to eat Bacon`);

  function state(stateName) {
    // console.log(provName);
    console.log(`${stateName} is a state on the east coast of America`);

    function city(cityName) {
      // console.log(cityName);
      console.log(`${cityName} is a small city in NC`);
    } //this closes the city
    city("Hickory");
  } //this closes the province
  state("NC");
} // this closes the country
country("USA");

function Parent(parentName) {
  let food = "Tacos";
  console.log(`The parents name is ${parentName} and he likes ${food}.`);
  function Child(childName) {
    console.log(
      `The childs name is ${childName} and he likes ${food} as well.`
    );
  }
  Child("Xander");
}
Parent("Brandon");

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 2: Implement a "counter maker" function ====

// IMPLEMENTATION OF counterMaker:
// 1- Declare a `count` variable with a value of 0. We will be mutating it, so declare it using `let`!
// 2- Declare a function `counter`. It should increment and return `count`.
//      NOTE: This `counter` function, being nested inside `counterMaker`,
//      "closes over" the `count` variable. It can "see" it in the parent scope!
// 3- Return the `counter` function.

const counterMaker = () => {
  let count = 0;
  return function counter() {
    count = count + 1;
    return count;
  };
};
const counterTwo = counterMaker();
console.log(counterTwo());
console.log(counterTwo());
console.log(counterTwo());
console.log(counterTwo());

// Example usage: const myCounter = counterMaker();
// myCounter(); // 1
// myCounter(); // 2

// ==== Challenge 3: Make `counterMaker` more sophisticated ====
// It should have a `limit` parameter. Any counters we make with `counterMaker`
// will refuse to go over the limit, and start back at 1.

// ==== Challenge 4: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
