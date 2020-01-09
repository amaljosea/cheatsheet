---
title: Closures
date: 2019-04-15
---

---

### Basics

- Closure = Function + Function's lexical environment
- Closure created every time function created
- To use a closure, define a function inside another function and expose it. To expose a function, return it or pass it to another function.

---

### Some examples of closure

#### Example 1

- A simple case where closure is in action, but not noticed

```js
function init() {
  var name = 'Mozilla'; // name is a local variable created by init
  function displayName() {
    // displayName() is the inner function, a closure
    console.log(name); // Output - Mozilla
  }
  displayName();
}
init();
```

- Here the the displayName function is able to access `name` because of closure

#### Example 2

- Another example where we can see the closure

```js
const makeCard = message => {
  return () => '<---- Happy ' + message + ' ---->';
};
//--------------------
const makeChristmasCard = makeCard('Christmas');
const makeNewYearCard = makeCard('New Year');
//--------------------
makeChristmasCard(); //returns - <---- Happy Christmas ---->
makeNewYearCard(); //returns - <---- Happy New Year ---->
```

- Here the makeChristmasCard access the `message` from closure
- We can see this by console makeChristmasCard

![makeChristmasCard console](./console.jpg)

---

### Closures in daily life / Common use cases of closure

- Closures are commonly used to give objects data privacy
- Closures are frequently used in JavaScript for object data privacy, in event handlers and callback functions, and in partial applications, currying, and other functional programming patterns.

- Emulating private methods with closures

````jsx
function makeAdder(x) {
  return function(y) {
    return x + y;
  };
}

var add5 = makeAdder(5);
var add10 = makeAdder(10);

console.log(add5(2));  // 7
console.log(add10(2)); // 12
};
* Emulating private methods with closures
```jsx
function makeAdder(x) {
  return function(y) {
    return x + y;
  };
}

var add5 = makeAdder(5);
var add10 = makeAdder(10);

console.log(add5(2));  // 7
console.log(add10(2)); // 12
};
````

---

### Closures scope chain

```jsx
// global scope
var e = 10;
function sum(a) {
  return function sum2(b) {
    return function sum3(c) {
      // outer functions scope
      return function sum4(d) {
        // local scope
        return a + b + c + d + e;
      };
    };
  };
}

var s = sum(1);
var s1 = s(2);
var s2 = s1(3);
var s3 = s2(4);
console.log(s3); //log 20
```

---

### Perfomance consideration
