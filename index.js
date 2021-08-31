// Q. When to use map(), filter(), reduce() and  forEach() in JavaScript?

// map();
// The map() method in JavaScript creates an array by calling a specific function on each element present in the parent array. It is a non-mutating method. Generally map() method is used to iterate over an array and calling function on every element of array

var array = [1, 2, 3, 4, 5];
const map = array.map(function (x) {
  return x * 3;
});
console.log(map);

// filter();
// The filter executes the callback and check its return value. If the value is true element remains in the resulting array but if the return value is false the element will be removed for the resulting array.

const filter = array.filter(function (x) {
  return x >= 3;
});
console.log(filter);

// reduce();
// The reduce() method in JavaScript is used to reduce the array to a single value and executes a provided function for each value of the array (from left-to-right) and the return value of the function is stored in an accumulator.

const reduce = array.reduce(function (acc, x) {
  return acc + x;
}, 0);
console.log(reduce);

// forEach();
// The forEach() method in JavaScript It takes a callback function and run that callback function on each element of array one by one.Basically forEach works as a traditional for loop looping over the array and providing array elements to do operations on them.

const forEach = array.forEach(function (elem, indx) {
  console.log(elem + " Comes from " + indx);
});
console.log(forEach);

// Q. What is Hoisting in JavaScript?
// Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution.

// Variable Hoisting
var message;
console.log(message);
message = "The variable Has been hoisted";

// Function Hoisting
function hoist() {
  a = 20;
  var b = 100;
}

hoist();
console.log(a);
// Accessible as a global variable outside hoist() function Output: 20
console.log(b);

// Q. What are closures?
// A closure is the combination of a function and the lexical environment within which that function was declared. i.e, It is an inner function that has access to the outer or enclosing function’s variables. The closure has three scope chains

// Own scope where variables defined between its curly brackets
// Outer function’s variables
// Global variables
function Welcome(name) {
  var greetingInfo = function (message) {
    console.log(message + " " + name);
  };
  return greetingInfo;
}
var myFunction = Welcome("John");
myFunction("Welcome "); // Output: Welcome John
myFunction("Hello Mr."); // output: Hello Mr.John
// As per the above code, the inner function greetingInfo() has access to the variables in the outer function Welcome() even after outer function has returned.

// Q. How do you clone an object in JavaScript?
// 3 Ways to Clone Objects in JavaScript
// Because objects in JavaScript are references values, you can't simply just copy using the =. But no worries, here are 3 ways for you to clone an object 👍

const food = { beef: "🥩", bacon: "🥓" };

// "Spread"
const spread = { ...food };

// "Object.assign"
Object.assign({}, food);

// "JSON"
JSON.parse(JSON.stringify(food));

// Q. What are the possible ways to create objects in JavaScript?

// a.) Object constructor: The simplest way to create an empty object is using Object constructor. Currently this approach is not recommended.
var object = new Object();

// b.) Object create method: The create method of Object creates a new object by passing the prototype object as a parameter
var object = Object.create(null);

// c.) Object literal syntax: The object literal syntax is equivalent to create method when it passes null as parameter
var object = {};

// d.) Function constructor: Create any function and apply the new operator to create object instances,
function Person(name) {
  var object = {};
  object.name = name;
  object.age = 26;
  return object;
}
var object = new Person("Alex");

// e.) Function constructor with prototype: This is similar to function constructor but it uses prototype for their properties and methods,
function Person() {}
Person.prototype.name = "Alex";
var object = new Person();

// f.) ES6 Class syntax: ES6 introduces class feature to create the objects
class Person {
  constructor(name) {
    this.name = name;
  }
}
var object = new Person("Alex");

// g.) Singleton pattern: A Singleton is an object which can only be instantiated one time. Repeated calls to its constructor return the same instance and this way one can ensure that they don't accidentally create multiple instances.
var object = new (function () {
  this.name = "Alex";
})();

// Q. What are the javascript data types?
// There are eight basic data types in JavaScript.

// Data Types	Description	Example
// String	    Represents textual data	let str = 'Hi', let str2 = "Hello", let str3 = `Hello World`
// Number	    An integer or a floating-point number	let num = 3, let num2 = 3.234, let num3 = 3e-2
// BigInt	    An integer with arbitrary precision	let num = 900719925124740999n, let num = 1n
// Boolean	    Any of two values: true or false	let flag = true
// undefined	A data type whose variable is not initialized	let a;
// null	        Denotes a null value	let a = null;
// Symbol	    Data type whose instances are unique and immutable	let value = Symbol('hello');
// Object	    key-value pairs of collection of data	let student = { };

// Q. What is variable shadowing in javascript?
// Variable shadowing occurs when a variable declared within a certain scope (decision block, method, or inner class) has the same name as a variable declared in an outer scope. This outer variable is said to be shadowed.

// If there is a variable in the global scope, and you'd like to create a variable with the same name in a function. The variable in the inner scope will temporarily shadow the variable in the outer scope.
var val = 10;

function Hoist(val) {
  alert(val);
}
Hoist(20);

// Q. What is an event flow?
// Event flow is the order in which event is received on the web page. When you click an element that is nested in various other elements, before your click actually reaches its destination, or target element, it must trigger the click event each of its parent elements first, starting at the top with the global window object.

// There are two ways of event flow

// Top to Bottom(Event Capturing)
// Bottom to Top (Event Bubbling)

// Q. What is event bubbling?
// Event bubbling is a type of event propagation where the event first triggers on the innermost target element, and then successively triggers on the ancestors (parents) of the target element in the same nesting hierarchy till it reaches the outermost DOM element.

// Q. What is event capturing?
// Event capturing is a type of event propagation where the event is first captured by the outermost element and then successively triggers on the descendants (children) of the target element in the same nesting hierarchy till it reaches the inner DOM element.

// Q. What is prototype chain?
// Nearly all objects in JavaScript are instances of Object. That means all the objects in JavaScript inherit the properties and methods from Object.prototype. This is called Prototype chaining.

// Prototype chaining is used to build new types of objects based on existing ones. It is similar to inheritance in a class based language. The prototype on object instance is available through Object.getPrototypeOf(object) or __proto__ property whereas prototype on constructors function is available through Object.prototype.

function Person(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
}
//Person class created
Person.prototype.getFullName = function () {
  return this.firstName + " " + this.lastName;
};

// we have added getFullName method in Person’s prototype.
var person = new Person("John", "K", 25);
// It will create an instance of the Person class
person.hasOwnProperty("firstName"); // true
person.hasOwnProperty("getFullName"); // false
person.getFullName(); // John K

// Q. What is the difference between Call, Apply and Bind?

// a.) call()
// The call() method invokes a function with a given this value and arguments provided one by one

var employee1 = { firstName: "John", lastName: "Rodson" };
var employee2 = { firstName: "Jimmy", lastName: "Baily" };

function invite(greeting1, greeting2) {
  console.log(
    greeting1 + " " + this.firstName + " " + this.lastName + ", " + greeting2
  );
}

invite.call(employee1, "Hello", "How are you?"); // Hello John Rodson, How are you?
invite.call(employee2, "Hello", "How are you?"); // Hello Jimmy Baily, How are you?

// b.) apply()
// Invokes the function and allows you to pass in arguments as an array

var employee1 = { firstName: "John", lastName: "Rodson" };
var employee2 = { firstName: "Jimmy", lastName: "Baily" };

function invite(greeting1, greeting2) {
  console.log(
    greeting1 + " " + this.firstName + " " + this.lastName + ", " + greeting2
  );
}

invite.apply(employee1, ["Hello", "How are you?"]); // Hello John Rodson, How are you?
invite.apply(employee2, ["Hello", "How are you?"]); // Hello Jimmy Baily, How are you?

// c.) bind()
// returns a new function, allowing you to pass in an array and any number of arguments

var employee1 = { firstName: "John", lastName: "Rodson" };
var employee2 = { firstName: "Jimmy", lastName: "Baily" };

function invite(greeting1, greeting2) {
  console.log(
    greeting1 + " " + this.firstName + " " + this.lastName + ", " + greeting2
  );
}

var inviteEmployee1 = invite.bind(employee1);
var inviteEmployee2 = invite.bind(employee2);
inviteEmployee1("Hello", "How are you?"); // Hello John Rodson, How are you?
inviteEmployee2("Hello", "How are you?"); // Hello Jimmy Baily, How are you?

// Q. What is the difference between == and === operators?
// == in JavaScript is used for comparing two variables, but it ignores the datatype of variable.It check only value.
// === is used for comparing two variables, but this operator also checks datatype and compares two values.

// Q. What is a first class function?
// JavaScript functions are first-class functions meaning functions and objects are treated as the same thing. Functions can be stored as a variable inside an object or an array as well as it can be passed as an argument or be returned by another function. That makes function "first-class citizens in JavaScript"

// Example: Assign a function to a variable
const message = function () {
  console.log("Hello World!");
};
message(); // Invoke it using the variable

// Example: Pass a function as an Argument
function sayHello() {
  return "Hello, ";
}
function greeting(helloMessage, name) {
  console.log(helloMessage() + name);
}
// Pass `sayHello` as an argument to `greeting` function
greeting(sayHello, "JavaScript!");

// Example: Return a function
function sayHello() {
  return function () {
    console.log("Hello!");
  };
}

// Example: Using a variable
const sayHello = function () {
  return function () {
    console.log("Hello!");
  };
};
const myFunc = sayHello();
myFunc();

// Example: Using double parentheses
function sayHello() {
  return function () {
    console.log("Hello!");
  };
}
sayHello()();
// We are using double parentheses ()() to invoke the returned function as well.

// Q. What is a higher order function?
// A Higher-Order function is a function that receives a function as an argument or returns the function as output.

// For example, Array.prototype.map(), Array.prototype.filter() and Array.prototype.reduce() are some of the Higher-Order functions in javascript.

const arr1 = [1, 2, 3];
const arr2 = arr1.map(function (item) {
  return item * 2;
});
console.log(arr2);

// Q. What is a unary function?
// Unary function (i.e. monadic) is a function that accepts exactly one argument. Let us take an example of unary function. It stands for single argument accepted by a function.

const unaryFunction = (a) => console.log(a + 10);
// Add 10 to the given argument and display the value

// Q. What is currying function?
// Currying is the process of taking a function with multiple arguments and turning it into a sequence of functions each with only a single argument.

function volume(length) {
  return function (width) {
    return function (height) {
      return height * width * length;
    };
  };
}

volume(2)(3)(4); // 24
// Curried functions are great to improve code re-usability and functional composition.

// Q. What is a pure function?
// The definition of a pure function is: The function always returns the same result if the same arguments are passed in. It does not depend on any state, or data, change during a program's execution. It must only depend on its input arguments.
Example;

function impure(arg) {
  finalR.s = 90;
  return arg * finalR.s;
}
// The above function is not a pure function because it modified a state finalR.s outside its scope.

function pure(arg) {
  return arg * 4;
}
// Here is a pure function. It didn’t side effect any external state and it returns an output based on the input.

// Benefits
// One of the major benefits of using pure functions is they are immediately testable. They will always produce the same result if you pass in the same arguments.
// The pure functions are easier to parallelize
// They also makes maintaining and refactoring code much easier.

// Q. What is memoization in JavaScript?
// Memoization is a top-down, depth-first, optimization technique of storing previously executed computations. Whenever the program needs the result of these computations, the program will not have to execute that computation again. Instead, it will reuse the result of the previously executed computation

// A simple memoized function to Add Number
const memoizedAdd = () => {
  let cache = {};
  return (number) => {
    if (number in cache) {
      console.log("Fetching from cache: ");
      return cache[number];
    } else {
      console.log("Calculating result: ");
      let result = number + 10;
      cache[number] = result;
      return result;
    }
  };
};
// returned function from memoizedAdd
const sum = memoizedAdd();
console.log(sum(10)); // Calculating result: 20
console.log(sum(10)); // Fetching from cache: 20

// Q. What is a promise?
// A promise is an object that may produce a single value some time in the future with either a resolved value or a reason that it’s not resolved(for example, network error). It will be in one of the 3 possible states: fulfilled, rejected, or pending. Syntax

const promise = new Promise(function (resolve, reject) {
  // promise description
});
// Promises are used to handle asynchronous operations. They provide an alternative approach for callbacks by reducing the callback hell and writing the cleaner code.

// Promises have three states:

// Pending: This is an initial state of the Promise before an operation begins
// Fulfilled: This state indicates that specified operation was completed.
// Rejected: This state indicates that the operation did not complete. In this case an error value will be thrown.

// Q. What is a callback function?
// A callback function is a function passed into another function as an argument. This function is invoked inside the outer function to complete an action.

function callbackFunction(name) {
  console.log("Hello " + name);
}

function outerFunction(callback) {
  let name = prompt("Please enter your name.");
  callback(name);
}

outerFunction(callbackFunction);

// Q. Why do we need callbacks?
// The callbacks are needed because javascript is a event driven language. That means instead of waiting for a response javascript will keep executing while listening for other events.

// Let us take an example with first function invoking an API call(simulated by setTimeout) and next function which logs the message.

function firstFunction() {
  // Simulate a code delay
  setTimeout(function () {
    console.log("First function called");
  }, 1000);
}
function secondFunction() {
  console.log("Second function called");
}
firstFunction();
secondFunction();

Output;
// Second function called
// First function called
// As observed from the output, javascript didnot wait for the response of first function and remaining code block get executed. So callbacks used in a way to make sure that certain code does not execute until other code finished execution.

// Q. What is a callback hell?
// Callback Hell is an anti-pattern with multiple nested callbacks which makes code hard to read and debug when dealing with asynchronous logic. The callback hell looks like below,

async1(function () {
  async2(function () {
    async3(function () {
      async4(function () {
        // Some Code
      });
    });
  });
});

firstFunction(args, function () {
  secondFunction(args, function () {
    thirdFunction(args, function () {
      // And so on…
    });
  });
});

// Q. What is promise chaining?
// The process of executing a sequence of asynchronous tasks one after another using promises is known as Promise chaining.

new Promise(function (resolve, reject) {
  setTimeout(() => resolve(1), 1000);
})
  .then(function (result) {
    console.log(result); // 1
    return result * 2;
  })
  .then(function (result) {
    console.log(result); // 2
    return result * 3;
  })
  .then(function (result) {
    console.log(result); // 6
    return result * 4;
  });

// Q. What is promise.all()?
// Promise.all is a promise that takes an array of promises as an input (an iterable), and it gets resolved when all the promises get resolved or any one of them gets rejected.

const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "foo");
});

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values);
});
// expected output: Array [3, 42, "foo"]

// Q. What is the purpose of race method in promise?
// Promise.race() method will return the promise instance which is firstly resolved or rejected. Let us take an example of race() method where promise2 is resolved first

var promise1 = new Promise(function (resolve, reject) {
  setTimeout(resolve, 500, "one");
});
var promise2 = new Promise(function (resolve, reject) {
  setTimeout(resolve, 100, "two");
});

Promise.race([promise1, promise2]).then(function (value) {
  console.log(value); // "two" // Both promises will resolve, but promise2 is faster
});

// Q. What is a strict mode in javascript?
// Strict Mode is a new feature in ECMAScript 5 that allows to place a program, or a function, in a strict operating context. This way it prevents certain actions from being taken and throws more exceptions. The literal expression 'use strict'; instructs the browser to use the javascript code in the Strict mode.

// Strict mode is useful to write secure javaScript by notifying "bad syntax" into real errors. For example, it eliminates accidentally creating a global variable by throwing an error and also throws an error for assignment to a non-writable property, a getter-only property, a non-existing property, a non-existing variable, or a non-existing object.

("use strict");
x = 3.14; // This will cause an error because x is not declared
// and if you declare inside a function, it has local scope

x = 3.14; // This will not cause an error.
myFunction();

function myFunction() {
  "use strict";
  y = 3.14; // This will cause an error
}

// Q. What is same-origin policy?
// The same-origin policy is a policy that prevents JavaScript from making requests across domain boundaries. An origin is defined as a combination of URI scheme, hostname, and port number. If you enable this policy then it prevents a malicious script on one page from obtaining access to sensitive data on another web page using Document Object Model(DOM).

// Q. Is JavaScript a compiled or interpreted language?
// JavaScript is an interpreted language, not a compiled language. An interpreter in the browser reads over the JavaScript code, interprets each line, and runs it. Nowadays modern browsers use a technology known as Just-In-Time (JIT) compilation, which compiles JavaScript to executable bytecode just as it is about to run.

// Q. What is the difference between window and document?
// The window is the first thing that gets loaded into the browser. This window object has the majority of the properties like length, innerWidth, innerHeight, name, if it has been closed, its parents, and more.

// The document object is html, aspx, php, or other document that will be loaded into the browser. The document actually gets loaded inside the window object and has properties available to it like title, URL, cookie, etc.

// Q. What are the differences between undeclared and undefined variables?

// undeclared	undefined
// These variables do not exist in a program and are not declared	These variables declared in the program but have not assigned any value
// If you try to read the value of an undeclared variable, then a runtime error is encountered	If you try to read the value of an undefined variable, an undefined value is returned.

// Q. What is the use of setTimeout?
// The setTimeout() method is used to call a function or evaluates an expression after a specified number of milliseconds. For example, let us log a message after 2 seconds using setTimeout method.

setTimeout(function () {
  console.log("Good morning");
}, 2000);

// Q. What is the use of setInterval?
// The setInterval() method is used to call a function or evaluates an expression at specified intervals (in milliseconds). For example, let us log a message after 2 seconds using setInterval method.

setInterval(function () {
  console.log("Good morning");
}, 2000);

// Q. What is an event delegation?
// Event delegation is a technique for listening to events where you delegate a parent element as the listener for all of the events that happen inside it. For example, if you wanted to detect field changes in inside a specific form, you can use event delegation technique.

// Q. What is the purpose JSON stringify?
// When sending data to a web server, the data has to be in a string format. You can achieve this by converting JSON object into a string using stringify() method.

var userJSON = { name: "John", age: 31 };
var userString = JSON.stringify(user);
console.log(userString); //"{"name":"John","age":31}"

// Q. How do you parse JSON string?
// When receiving the data from a web server, the data is always in a string format. But you can convert this string value to javascript object using parse() method.

var userString = '{"name":"John","age":31}';
var userJSON = JSON.parse(userString);
console.log(userJSON); // {name: "John", age: 31}

// Q. What is the purpose of clearTimeout method?
// The clearTimeout() function is used in javascript to clear the timeout which has been set by setTimeout() function before that.
var msg;
function greeting() {
  alert("Good morning");
}
function start() {
  msg = setTimeout(greeting, 3000);
}
function stop() {
  clearTimeout(msg);
}

// Q. What is the purpose of clearInterval method?
// The clearInterval() function is used in javascript to clear the interval which has been set by setInterval() function.
var msg;
function greeting() {
  alert("Good morning");
}
function start() {
  msg = setInterval(greeting, 3000);
}
function stop() {
  clearInterval(msg);
}

// Q. What is an anonymous function?
// An anonymous function is a function without a name! Anonymous functions are commonly assigned to a variable name or used as a callback function. The syntax would be as below,

// function (optionalParameters) {
//   //do something
// }

const myFunction = function () {
  //Anonymous function assigned to a variable
  //do something
};

[1, 2, 3].map(function (element) {
  //Anonymous function used as a callback function
  //do something
});
Example: var x = function (a, b) {
  return a * b;
};
var z = x(5, 10);
console.log(z); // 50

// Q. What is an error object?
// An error object is a built in error object that provides error information when an error occurs. It has two properties: name and message. For example, the below function logs error details,

try {
  greeting("Welcome");
} catch (err) {
  console.log(err.name + "<br>" + err.message);
}

// Q. When you get a syntax error?
// A SyntaxError is thrown if you try to evaluate code with a syntax error. For example, the below missing quote for the function parameter throws a syntax error

try {
  eval("greeting('welcome)"); // Missing ' will produce an error
} catch (err) {
  console.log(err.name);
}

// Q. What are the different error names from error object?
// There are 6 different types of error names returned from error object

// Error Name	Description
// EvalError	An error has occurred in the eval() function
// RangeError	An error has occurred with a number "out of range"
// ReferenceError	An error due to an illegal reference
// SyntaxError	An error due to a syntax error
// TypeError	An error due to a type error
// URIError	An error due to encodeURI()

// Q. What is event loop? What is the difference between call stack and task queue?
// The event loop is a single-threaded loop that monitors the call stack and checks if there is any work to be done in the task queue. If the call stack is empty and there are callback functions in the task queue, a function is dequeued and pushed onto the call stack to be executed.

// Q. What is IIFE (Immediately Invoked Function Expression) and how it can be useful?
// IIFE a function that runs as soon as It is defined. Usually It is anonymous (doesn't have a function name), but it also can be named. Here's an example of IIFE:

(function () {
  console.log("Hi, I'm IIFE!");
})();
// outputs "Hi, I'm IIFE!"
// So, here's how it works. Remember the difference between function statements (function a () {}) and function expressions (var a = function() {})? So, IIFE is a function expression. To make it an expression we surround our function declaration into the parens. We do it to explicitly tell the parser that It is an expression, not a statement (JS doesn't allow statements in parens).

// After the function you can see the two () braces, this is how we run the function we just declared.

// The function inside IIFE doesn't have to be anonymous. This one will work perfectly fine and will help to detect your function in a stacktrace during debugging:
(function myIIFEFunc() {
  console.log("Hi, I'm IIFE!");
})();
// outputs "Hi, I'm IIFE!"
// It can take some parameters:
(function myIIFEFunc(param1) {
  console.log("Hi, I'm IIFE, " + param1);
})("Yuri");
// outputs "Hi, I'm IIFE, Yuri!"

// It can return a value:
var result = (function myIIFEFunc(param1) {
  console.log("Hi, I'm IIFE, " + param1);
  return 1;
})("Yuri");
// outputs "Hi, I'm IIFE, Yuri!"
// result variable will contain 1
// You do not have to surround the function declaration into parens, although It is the most common way to define IIFE. Instead you can use any of the following forms:
~(function () {
  console.log("hi I'm IIFE");
})();
!(function () {
  console.log("hi I'm IIFE");
})() +
  (function () {
    console.log("hi I'm IIFE");
  })() -
  (function () {
    console.log("hi I'm IIFE");
  })()(
    (function () {
      console.log("hi I'm IIFE");
    })()
  );
var i = (function () {
  console.log("hi I'm IIFE");
})();
true &&
  (function () {
    console.log("hi I'm IIFE");
  })();
0,
  (function () {
    console.log("hi I'm IIFE");
  })();
new (function () {
  console.log("hi I'm IIFE");
})();
new (function () {
  console.log("hi I'm IIFE");
})();

// Q. What are promises and how they are useful?
// We use promises for handling asynchronous interactions in a sequential manner. They are especially useful when we need to do an async operation and THEN do another async operation based on the results of the first one. For example, if you want to request the list of all flights and then for each flight you want to request some details about it. The promise represents the future value. It has an internal state (pending, fulfilled and rejected) and works like a state machine.

// A promise object has then method, where you can specify what to do when the promise is fulfilled or rejected.

// You can chain then() blocks, thus avoiding the callback hell. You can handle errors in the catch() block. After a promise is set to fulfilled or rejected state, it becomes immutable.

// Also mention that you know about more sophisticated concepts:

// async/await which makes the code appear even more linear
// RxJS observables can be viewed as the recyclable promises
// Be sure that you can implement the promise, read one of the articles on a topic, and learn the source code of the simplest promise implementation.

// Q. Explain how this works in JavaScript?
// The following rules are applied when we use this keyword in javascript

// If the new keyword is used when calling the function, this inside the function is a brand new object.
// If apply, call, or bind are used to call/create a function, this inside the function is the object that is passed in as the argument.
// If a function is called as a method, such as obj.method() — this is the object that the function is a property of.
// If a function is invoked as a free function invocation, meaning it was invoked without any of the conditions present above, this is the global object. In a browser, it is the window object. If in strict mode ('use strict'), this will be undefined instead of the global object.
// If multiple of the above rules apply, the rule that is higher wins and will set the this value.
// If the function is an ES2015 arrow function, it ignores all the rules above and receives the this value of its surrounding scope at the time it is created.

// Q. Explain how prototypal inheritance works?
// All JavaScript objects have a prototype property, that is a reference to another object. When a property is accessed on an object and if the property is not found on that object, the JavaScript engine looks at the object's prototype, and the prototype's prototype and so on, until it finds the property defined on one of the prototypes or until it reaches the end of the prototype chain.

// We already have a build-in Object.create, but if you were to provide a polyfill for it, that might look like:

Example: if (typeof Object.create !== "function") {
  Object.create = function (parent) {
    function Tmp() {}
    Tmp.prototype = parent;
    return new Tmp();
  };
}

const Parent = function () {
  this.name = "Parent";
};

Parent.prototype.greet = function () {
  console.log("hello from Parent");
};

const child = Object.create(Parent.prototype);

child.cry = function () {
  console.log("waaaaaahhhh!");
};

child.cry();
// Outputs: waaaaaahhhh!

child.greet();
// Outputs: hello from Parent

// Q. What is the difference between slice and splice?
// Some of the major difference in a tabular form

// Slice	Splice
// Doesn't modify the original array(immutable)	Modifies the original array(mutable)
// Returns the subset of original array	Returns the deleted elements as array
// Used to pick the elements from array	Used to insert or delete elements to/from array

let arrayIntegers = [1, 2, 3, 4, 5];
let arrayIntegers1 = arrayIntegers.slice(0, 2); // returns [1,2]
let arrayIntegers2 = arrayIntegers.slice(2, 3); // returns [3]
let arrayIntegers3 = arrayIntegers.slice(4); //returns [5]

let arrayIntegersOriginal1 = [1, 2, 3, 4, 5];
let arrayIntegersOriginal2 = [1, 2, 3, 4, 5];
let arrayIntegersOriginal3 = [1, 2, 3, 4, 5];

let arrayIntegers1 = arrayIntegersOriginal1.splice(0, 2); // returns [1, 2]; original array: [3, 4, 5]
let arrayIntegers2 = arrayIntegersOriginal2.splice(3); // returns [4, 5]; original array: [1, 2, 3]
let arrayIntegers3 = arrayIntegersOriginal3.splice(3, 1, "a", "b", "c"); //returns [4]; original array: [1, 2, 3, "a", "b", "c", 5]

// Q. What unit testing framework do you use? and why?
// Unit testing is the process of testing the implemented code at a module level. Unit testing allows you to ensure that your developed modules are meeting the requirements specified by the business document. These tests are written for every module as they are created.

// Unit testing provides numerous benefits including finding software bugs early, facilitating change, simplifying integration, providing a source of documentation, and many others, which we will look right now with more detail.

// Makes the Process Agile
// Quality of Code
// Finds Software Bugs Early
// Facilitates Changes and Simplifies Integration
// Provides Documentation
// Debugging Process
// Design
// Reduce Costs
// Challenges in JavaScript Unit Testing

// JavaScript Unit Testing Frameworks

// Unit.js: It is known as an open source assertion library running on browser and Node.js. It is extremely compatible with other JavaScript Unit Testing frameworks like Mocha, Karma, Jasmine, QUnit, Protractor, etc. Provides the full documented API of assertion list

// QUnit: It is used for both client-side as well as server-side JavaScript Unit Testing. This Free framework is used for jQuery projects. It follows Common JS unit testing Specification for unit testing. It supports the Node Long-term Support Schedule.

// Jasmine: Jasmine is the behavior-driven development framework for JavaScript unit Testing. It is used for testing both synchronous and asynchronous JavaScript Code. It does not require DOM and comes with the easy syntax that can be Written for any test.

// Karma: Karma is an open source productive testing environment. Easy workflow control Running on the command line. Offers the freedom to write the tests with Jasmine, Mocha, and QUnit. You can run the test on real devices with easy debugging.

// Mocha: Mocha runs on Node.js and in the browser. Mocha performs asynchronous Testing in a simpler way. Provides accuracy and flexibility in reporting. Provides tremendous support of rich features such as test-specific timeouts, JavaScript APIs etc.

// Jest: Jest is used by Facebook so far to test all of the JavaScript code. It provides the 'zero-configuration' testing experience. Supports independent and non-interrupting running test without any conflict. Do not require any other setup configuration and libraries.

// AVA: AVA is simple JavaScript Unit Testing Framework. Tests are being run in parallel and serially. Parallel tests run without interrupting each other. AVA Supports asynchronous testing as well. AVA uses subprocesses to run the test.

// Q. Explain array methods [ join(), pop(), push(), shift(), unshift(), concat(), map(), filter(), reduce(), reduceRight(), every(), some(), indexOf(), lastIndexOf(), find(), findIndex(), includes() ]
// a.) array.join(): The join() method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.

var elements = ["Fire", "Air", "Water"];

console.log(elements.join()); // Output: "Fire,Air,Water"
console.log(elements.join("")); // Output: "FireAirWater"
console.log(elements.join("-")); // Output: "Fire-Air-Water"
// b.) array.pop(): The pop() method removes the last element from an array and returns that element. This method changes the length of the array.

var plants = ["broccoli", "cauliflower", "kale"];

console.log(plants.pop()); // Output: "kale"
console.log(plants); // Output: Array ["broccoli", "cauliflower"]
console.log(plants.pop()); // Output: "cauliflower"
console.log(plants.pop()); // Output: "broccoli"
console.log(plants.pop()); // Output: "undefined"
// c.) array.push(): The push() method adds one or more elements to the end of an array and returns the new length of the array.

const animals = ["pigs", "goats", "sheep"];

const count = animals.push("cows");
console.log(count); // Output: 4
console.log(animals); // Output: Array ["pigs", "goats", "sheep", "cows"]
// d.) array.shift(): The shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.shift();
console.log(fruits); // Output: Array ["Orange", "Apple", "Mango"]
// e.) array.unshift(): The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.

var fruits = ["Banana", "Orange", "Apple"];
fruits.unshift("Mango", "Pineapple");
console.log(fruits); // Output: Array ["Mango", "Pineapple", "Banana", "Orange", "Apple"]
// f.) array.concat(): The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.

const array1 = ["a", "b", "c"];
const array2 = ["d", "e", "f"];

console.log(array1.concat(array2)); // Output: Array ["a", "b", "c", "d", "e", "f"]
// g.) array.map(): The map() method creates a new array with the results of calling a provided function on every element in the calling array.

var array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map((x) => x * 2);

console.log(map1); // Output: Array [2, 8, 18, 32]
// h.) array.filter(): The filter() method creates a new array with all elements that pass the test implemented by the provided function.

var words = ["spray", "limit", "elite", "exuberant", "destruction"];

const result = words.filter((word) => word.length > 6);

console.log(result); // Output: Array ["exuberant", "destruction"]
// i.) array.reduce(): The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.

const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

console.log(array1.reduce(reducer)); // Output: 10
console.log(array1.reduce(reducer, 5)); // Output: 15
// j.) array.reduceRight(): The reduceRight() method applies a function against an accumulator and each value of the array (from right-to-left) to reduce it to a single value.

const array1 = [
  [0, 1],
  [2, 3],
  [4, 5],
].reduceRight((accumulator, currentValue) => accumulator.concat(currentValue));

console.log(array1); // Output: Array [4, 5, 2, 3, 0, 1]
// k.) array.every(): The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.

function isBelowThreshold(currentValue) {
  return currentValue < 40;
}

var array1 = [1, 30, 39, 29, 10, 13];
console.log(array1.every(isBelowThreshold)); // Output: true
// l.) array.some(): The some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns a Boolean value.

var array = [1, 2, 3, 4, 5];

var even = function (element) {
  // checks whether an element is even
  return element % 2 === 0;
};

console.log(array.some(even)); // Output: true
// m.) array.indexOf(): The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.

var beasts = ["ant", "bison", "camel"];

console.log(beasts.indexOf("camel")); // Output: 2
console.log(beasts.indexOf("giraffe")); // Output: -1
// n.) array.lastIndexOf(): The lastIndexOf() method returns the index within the calling String object of the last occurrence of the specified value, searching backwards from fromIndex. Returns -1 if the value is not found.

var paragraph =
  "The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?";

var searchTerm = "dog";

console.log(
  'The index of the first "' +
    searchTerm +
    '" from the end is ' +
    paragraph.lastIndexOf(searchTerm)
);
// Output: "The index of the first "dog" from the end is 52"
// o.) array.find(): The find() method returns the value of the first element in the provided array that satisfies the provided testing function.

var array1 = [5, 12, 8, 130, 44];

var found = array1.find(function (element) {
  return element > 100;
});

console.log(found); // Output: 130
// p.) array.findIndex(): The findIndex() method returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1, indicating that no element passed the test.

var array1 = [5, 12, 8, 130, 44];

function isLargeNumber(element) {
  return element > 20;
}

console.log(array1.findIndex(isLargeNumber)); // Output: 3
// q.) array.includes(): The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.

var array1 = [1, 2, 3];
console.log(array1.includes(2)); // Output: true

var pets = ["cat", "dog", "bat"];
console.log(pets.includes("at")); // Output: false

// Q. When to use function declarations and expressions in JavaScript?
// Function Declarations A declared function is “saved for later use”, and will be executed later, when it is invoked (called).

// Function declaration
function add(num1, num2) {
  return num1 + num2;
}
// function is only declared here. For using it, it must be invoked using function name. e.g
add(10, 20);

// Function Expression
// A function expression can be stored in a variable:

// Function expression
var add = function (num1, num2) {
  return num1 + num2;
};
// After a function expression has been stored in a variable, the variable can be used as a function. Functions stored in variables do not need function names. They are always invoked (called) using the variable name.

// Difference
// Function declarations load before any code is executed while Function expressions load only when the interpreter reaches that line of code.
// Similar to the var statement, function declarations are hoisted to the top of other code. Function expressions aren’t hoisted, which allows them to retain a copy of the local variables from the scope where they were defined.
// Benefits of Function Expressions
// There are several different ways that function expressions become more useful than function declarations.

// As closures
// As arguments to other functions
// As Immediately Invoked Function Expressions (IIFE)

// Q. How to avoid callback hell in javascript?
// Callback hell is a phenomenon that afflicts a JavaScript developer when he tries to execute multiple asynchronous operations one after the other. Some people call it to be the pyramid of doom.

doSomething(param1, param2, function (err, paramx) {
  doMore(paramx, function (err, result) {
    insertRow(result, function (err) {
      yetAnotherOperation(someparameter, function (s) {
        somethingElse(function (x) {});
      });
    });
  });
});
// Techniques for avoiding callback hell

// Write comments
// Split functions into smaller functions
// Using Async.js
// Using Promises
// Using Async-Await
