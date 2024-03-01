import sampleData1 from "./mock/api/sample1.json" assert { type: "json" };
import sampleData2 from "./mock/api/sample2.json" assert { type: "json" };

console.log(sampleData1.data.company.role.id, "sample1");

let samArr = [1, 6, 8];

for (let i = 0; i < samArr.length; i++) {
  console.log(sampleData2, `sample2 for ${i} time`);
}

// // 01-09-2023
// var newArray = ["🐔", "🥚"];
// var sortedArray = newArray.sort();
// console.log(sortedArray, "sortedArray");

// // console.log(fullName);

let fullName = "Sai Ready";
// var duplicateName = fullName;
// console.log(duplicateName, "duplicateName");
// let fname = "Sai";
// const lname = "Ready";

// console.log(fullName);
// console.log(fname, "fname");
// console.log(lname, "lname");

function addNumbers(a, b) {
  return a + b;
}

addNumbers(100000, 2);

// document.querySelector("h1").innerHTML = fullName;

var heading = document.createElement("h1");
heading.innerHTML = "New Heading!";
document.body.appendChild(heading);
heading.innerHTML = "New Heading7!";

// // 02-09-2023

// /* data types in js
// primitive  -- value types
// reference
// */

// //primitive data type(independent of each other)

let xi = 10;
let yi = xi;
xi = 40;
console.log(xi, "final value");
console.log(yi, "y value");

// //reference data types(dependent on each other)

// let obj = { value: 5 };
// let newObj = obj;
// obj.value = 80;
// console.log(obj.value, "obj");
// console.log(newObj.value, "newObj");

// let arr = [10, 79];
// let newArr = arr;

// console.log(arr);
// console.log(newArr, "new array");

// console.log(newVar, "newVar");
// var newVar;

// getName();
// function getName() {
//   console.log("namaste javascript");
// }

// var getName2 = () => {
//   console.log("namaste javascript");
// };
// getName2();

// /*
// 09/09/2023
// undefined vs not defined
// scope chain, lexical environment(to its and its parent)
// temporial dead zone
// block scope
// */

// var er = 23;
// var er = 67;

// // console.log(rtc);
// // console.log(yu)

// const rtc = 234;
// // console.log(uin)

// var ui = 3488;
// {
//   var ui = 23;
//   let uin = 32;
//   const cin = 233;
//   console.log(ui);
//   console.log(uin);
//   console.log(cin);
// }
// console.log(ui);

let initialCount = 0;
let incrementCount = document.getElementById("incrementButton");
let decrementCount = document.getElementById("decrementButton");
let countValue = document.getElementById("countValue");

incrementCount.addEventListener("click", () => {
  initialCount++;
  countValue.innerHTML = initialCount;
});

decrementCount.addEventListener("click", () => {
  initialCount--;
  countValue.innerHTML = initialCount;
});

// /*
// 10-09-2023
// Array methods
// string methods
// object methods
//  */

// let arrayMethod = [
//   "apple",
//   "mango",
//   "banana",
//   "orange",
//   "grapes",
//   "watermelon",
//   "pineapple",
//   "jack",
// ];
// arrayMethod.filter((element) => {
//   console.log(element === "jack" , "hellooooo" );
// });
// for (i = 0; i < arrayMethod.length; i++) {
//   console.log("each time increment value");
// }
// console.log(arrayMethod.length);
// console.log(arrayMethod.indexOf("jack"));
// console.log(arrayMethod.reverse());
// console.log(arrayMethod.sort());
// console.log(arrayMethod.at(2));
// console.log(arrayMethod.fill("sai", 4, 5));

// const myObj = {
//   a: "sai",
//   b: "stranger",
//   c: "person",
// };
// console.log(Object.keys(myObj));

// let stg = "learning javascript";
// console.log(typeof stg);
// let num = 998;
// console.log(typeof num);
// let bool = true;
// console.log(typeof bool);
// let arrNew = [1, 2, 78, 98];
// console.log(typeof arrNew);
// let objNew = {
//   name: "sai",
//   age: 25,
// };
// console.log(typeof objNew);

function fnameNew() {
  console.log("new function");
}
console.log(typeof fnameNew, "fName");

// /* closures */

// function xName() {
//   let pet = "doggy";
//   function yName() {
//     console.log(pet);
//   }
//   yName();
// }
// xName();

// /* global, local, block
// We can access number everywhere. We can only access square and largerNumber in the function because they have local scope.
// But accessing anotherLargerNumber outside the block throws an anotherLargerNumber is not defined error.
// */
// let number = 50; // global
// function funName() {
//   let square = number * number; // local scope

//   if (number < 60) {
//     var largerNumber = 80;
//     let anotherLargerNumber = 100; // block scope

//     console.log(square);
//   }

//   console.log(largerNumber);
//   console.log(anotherLargerNumber);
// }

// let testObj = {};
// testObj.name = "sai";

// let testArr = [];
// testArr[1] = "test data";

// function randomFunction() {
//   let number = 1999;
//   function innerFunction() {
//     console.log(number);
//   }
//   return innerFunction;
// }

// // console.log(randomFunction, "randomFunction and randomFunction")
// // console.log(randomFunction(), "randomFunction()")
// // var randomResult = randomFunction();
// // console.log(randomResult)
// // randomResult()
// // console.log(randomFunction, "randomFunction")

// function xyz() {
//   let number = 19 + 2;
//   function innerFunction() {
//     console.log(number);
//   }
//   return innerFunction;
// }

// // console.log(xyz(), "xyz()")
// var finalResult = xyz();
// finalResult();

// /* immediate invoke function */
// (function () {
//   let str = "i am from immediate invoke function";
//   console.log(str);
// })();

//By using Var The loop starts with i = 1 and increments i in each iteration until i = 6 (when the loop exits).
for (let i = 1; i <= 5; i++) {
  setTimeout(function () {
    console.log(i, "i+i");
  }, i * 1000);
}

// function C() {
//   let x = 0;
//   function inc() {
//     x++;
//     console.log(x, "x++");
//   }
//   return inc;
// }
// let c1 = C();
// let c2 = C();
// c1();
// c1();
// c2(); // c2 will take new count value the fresh value
// c2();
// c2();

// let testX;
// testX = "updated";
// console.log(testX, "testX");

// /* functions in javascript */
// //function statement or function declaration both are same
// function funDeclaration() {
//   console.log("this is function declaration");
// }
// funDeclaration();
// //function expression
// var funValue = function () {
//   console.log("this is function expression");
// };
// funValue();
// //anonymous function
// // function() {
// //   console.log("this is anonymous expression");
// // }
// //named function expression
// var funExpressValue = function namedFunctionExpression() {
//   console.log("this is function expression");
// };
// //first class functions
// //functions to pass an arguments to another function as an value is called first class functions or ability to store functions as value
// let firstClassArgumentValue = function () {
//   console.log("hello", "hello from param1");
// };
// let firstClassValue = function (param1) {
//   // console.log(param1(), "param1");
//   param1();
// };
// // firstClassArgumentValue()
// firstClassValue(firstClassArgumentValue);
// firstClassFunctionName(function () {});

/* In JavaScript, functions are first-class citizens, which means they can be assigned to variables, 
passed as arguments to other functions, and returned as values from other functions. */

setTimeout(function () {
  console.log("hey sai");
}, 4000);

// function x(y) {
//   console.log("this is x");
//   y();
// }
// x(function y() {
//   console.log("this is y");
// });

function x(y) {
  console.log("this is x");
  y();
}
x(() => console.log("this is y"));

const xyz = (zyx) => zyx * zyx;
console.log(xyz(5));

function factorial(n) {
  // Base case
  if (n === 0) {
    return 1;
  }
  // Recursive case
  console.log(n, "before n");
  return n * factorial(n - 1);
  console.log(n, "after n");
}

// Example usage
const result = factorial(5); // Result will be 120 (5! = 5 * 4 * 3 * 2 * 1)
console.log(result);

function testData(n) {
  if (n > 0) {
    console.log(n);
    return testData(n - 1); // 9 8
  }
}
testData(10);

function callBack(b) {
  console.log(`value is ${b}`);
}
function mainCall(a) {
  // return a
}

mainCall(callBack(5));

const greet = function (name) {
  console.log(name);
};
console.log(greet("hellooooo sais"));

let rArr = [3, 1, 2, 4, 5];
// rArr.map((rest)=>{
// console.log(rest)
// });

// console.log(rArr.length, "length")

for (let i = 0; i < rArr.length; i++) {
  console.log(rArr[i] > 2, "rarr");
}

let filteredValue = rArr.filter((val) => {
  return val > 2;
});

console.log(filteredValue, "filteredValue");
let fArr = [1, 6, 7, 8, 4];
let fArrResult = fArr.filter((x) => x > 2);
console.log(fArrResult, "fArrResult");

// Fetching names using a loop
// const names = [];
// for (const item of reportData) {
//   names.push(item.Name);
// }

// console.log(names);

// or map function to achieve the same result

console.log(
  sampleData2?.data?.getCurrentAssignmentsReport?.data?.map(
    (item) => item.equipmentName
  )
);

// let ab = [10];
// let bc = ab
// console.log(bc, "bcccccccc")
// {
//   let ba = ab;
//   console.log(ba, "ba")  // [10]
//   ba = "hey new ba variable"
//   console.log(ba, " new ba"); // hey new ba variable
//   console.log(ab, " new ab")
// }
// console.log(ab, "ab");  // [10]
// console.log(bc, "bc"); //[10]
// bc[0] = [999];
// console.log(bc[0], "bc") // [999]
// console.log(ab[0], "ab"); // [999]

// let nObj = {
//   name: "sai"
// }
// console.log(nObj.name, "nObj.name");

// let fObj = nObj;
// fObj.name= "hello new object"

// console.log(nObj.name, "nObj.name");
// console.log(fObj.name, "fObj.name");

/* promises */

let gitApi = "https://api.github.com/users/akshaymarch7";

let res = fetch(gitApi);

res.then(console.log("hey promise"));

console.log(res, "res");

// function test1(n) {
//   for (let i = 0; i < n; i++) {
//     test1(n-1);
//     console.log("I am from test1");
//   }
// }
// test1(2);

function test1(n) {
  if (n > 0) {
    test1(n - 1);
    console.log("I am from test1");
  }
}

test1(2);

// Creating a promise
const myPromise = new Promise((resolve, reject) => {
  // Asynchronous operation (e.g., fetching data from an API)
  const success = true;

  if (success) {
    // If the operation is successful, resolve the promise with a value
    resolve("Operation completed successfully");
  } else {
    // If the operation fails, reject the promise with a reason
    reject("Operation failed");
  }
});

// Using the promise
myPromise
  .then((result) => {
    // The promise was fulfilled
    console.log(result, );
  })
  .catch((error) => {
    // The promise was rejected
    console.error(error);
  });

// ways to creating an array

let normalArray = [10, 11, 12, 13, 14, 15];
let withNewKeyword = new Array(3); // *** where 3 is not array element it is the length of the array
let myFavoriteFoods = Array.of("pizza", "ice cream", "salad");
console.log(withNewKeyword, "withNewKeyword"); // where withNewKeyword[0], withNewKeyword[1], withNewKeyword[2] will be undefined

let testChar = [20, "hello"];
let setChar = [20, "hello", "hi"];
console.log((testChar = setChar), "setChar");
console.log(testChar === setChar, "testChar");

const testData1 = {
  propValue: 42,
  func: () => testData1.propValue,
};

console.log(testData1.func());

// promises: When ever we call a promiseFunction, it will create a promise and return a promise

function promiseFunction(cart) {
  return new Promise((resolve, reject) => {
    let cartId = "12345id";
    console.log(cart, "cart");
    // if (!cartValue(cart)) {
    //   const error = new Error("cart is not valid");
    //   reject(error);
    // }
    if (cartId) {
      resolve(cartId, "cartId");
    }
  });
}

let cartItem = ["shoe", "pant", "shirt"];

const prom = promiseFunction(cartItem);

console.log(prom, "prom");

prom.then((cartRes) => console.log(cartRes)); // promise.then that accepts a callBack function will print the resolve function when promise is resolved

function cartValue(cartItem) {
  return false;
}

// closures
function outer() {
  let testS = 2388;
  function inner() {
    function mostInner() {
      console.log(testS, "testS");
    }
    return mostInner;
  }
  return inner;
}

outer()()();

// when promise is resolved

const pResolve = new Promise((resolve, reject) => {
  resolve("promise is resolved");
});

console.log(pResolve, "pResolve");

pResolve.then((result) => {
  console.log(result, "result");
});

// when promise is rejected

const pReject = new Promise((resolve, reject) => {
  reject("promise is rejected");
});

console.log(pReject, "pReject");

pReject.catch((error) => {
  console.log(error, "error");
});

function funName(val) {
  console.log(val, "valll");
  return 6 + val;
}

const userVal = funName(2);
console.log(userVal, "userVal");

// how to make fetch call, fetch is default method given by browser

let getFetch = "https://jsonplaceholder.typicode.com/posts";
let fetchObj = fetch(getFetch);
console.log("fetchObj", fetchObj); // returns a promise

fetchObj
  .then((res) => res.json())
  .then((data) => {
    let resultData = document.querySelector("h4");

    resultData.innerHTML = data.map((id) => id.title);

    console.log(data, "whole data");
  });

// .then(data => {
//   console.log(data.map((items) => items.id )) })

//  object destructuring

const personObject = {
  name: "sai",
  age: 25,
  profession: "developer",
};

console.log(personObject.profession, "personObject");
const { name, age, profession } = personObject;
console.log(age, "personObject, personObject");

// adding arrays
let arr1 = [10, 20, 30];
let arr2 = [40, 50, 60];
let arr3 = arr2.concat(arr1).join(", ");
console.log(arr3, "arr3");

// most important in async and await

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promise1 is resolved");
  }, 5000);
});
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promise2 is resolved");
  }, 10000);
});

// even though promise2 has setTimeout of 5 sec it will not execute immediately after 5000 seconds, async function will await for before promise
// if suppose promise1 has setTimeout of less than promise2 than promise1 will execute first and after that promise2 will execute based on its setTimeout

async function getPromise() {
  console.log("helloo heyyyyy");
  let pro1 = await promise1;
  console.log("pro1", pro1);
  console.log("hey promise 1");
  let pro2 = await promise2;
  console.log("pro2", pro2);
  console.log("hey promise 2");
}
console.log("heyyy js engine");

getPromise();

function test(someText) {
  console.log(someText, "someText");
}
function HigherOrder(test) {
  console.log("higher order function");
  test("hello test");
}

HigherOrder(test);

let arrList = [10, 20, 30, 40, 50];

arrList.map(console.log); // element, index, array

let sum = arrList.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);

console.log("Sum:", sum);

function testPure(z) {
  var a = 10;
  console.log(a + z, "a+z");
  a++;
  console.log(a);
}

testPure(8);
testPure(2);

const transactions = [1000, 3000, 4000, 2000, -898, -4500];
let totalAmount = transactions
  .filter((num) => num > 0)
  .reduce((accumulator, amount) => accumulator + amount, 0);
console.log(totalAmount, "totalAmount");

notDeclared = 99;
var notDeclared;
console.log(notDeclared, "notDeclared");

const testCallBack = (number) => {
  console.log("I am from test call back:", number);
};

const mainFunction = (test, num) => {
  test(num);
};

mainFunction(testCallBack, 23);
