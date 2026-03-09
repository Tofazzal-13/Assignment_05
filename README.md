# Q1. What is the difference between var, let, and const?

Differences Between let, const and var

## 1. var

- Function Scoped
- Can be Redeclared
- Get hoisted (but initialized as undefined) 
- Not used in Modern JS anymore

---

## 2. let

- Block Scoped  
- Can be updated but not redeclared
- Not hoisted (in the same way) 
- Safer than var

---

## 3. Const

- Block Scoped
- Cannot be update or redeclared
- Ideal for constants or functions  

---

---
# Q2.  What is the spread operator (...)?
ES6 provides a new operator called spread operator that consists of three dots (...). The spread operator allows you to spread out elements of an iterable object such as an array, map, or set. For example:
```javascript
 const odd = [1,3,5];
 const combined = [2,4,6, ...odd];
 console.log(combined);
``` 
```output
 [ 2, 4, 6, 1, 3, 5 ]
```
---

---
# Q3. What is the difference between map(), filter(), and forEach()?

## Array.map()
The map method receives a function as a parameter. Then it applies it to each element and returns an entirely new array (populated with the results of calling the provided function). The key takeaway is that it will always return the same number of items.

```javascript
 let arr = [1,5,9,1,5,6,1];
 arr = arr.map((e) => {
    return (e * e);
 })
 console.log(arr)
```
```console
[1,25,81,1,25,36,1]
```
## Array.forEach()
forEach() method receives a function as an argument and executes it once for each element present in the array. However, instead of returning a new array (like in the case of map), it returns undefined.

```javascript
 let arr = [1,5,9,1,5,6,1];
 arr = arr.forEach((item) => {
    return (item * 2);
 })
 console.log(arr)
```
```console
undefined
```

## Array.filter()
The filter() method takes each element in an array and it applies a conditional statement against it. If this conditional returns true, the element gets pushed to the output array. If the condition returns false, the element does not get pushed to the output array.

```javascript
 const numbers = [1, 2, 3, 4];
 const evens = numbers.filter(item => item % 2 === 0);
 console.log(evens);
```
```console
[2, 4]

```

---
---
# Q4. What is an arrow function?
Arrow functions, also known as fat arrow functions, are a shorthand way of writing function expressions in JavaScript. They provide a shorter syntax compared to traditional function expressions and help reduce the amount of boilerplate code in JavaScript. Arrow functions were introduced in ES6 (ECMAScript 2015) and have since become a popular feature in modern JavaScript programming.

## The traditional way of writing a function:

```javascript
 function sum(a, b) {
  return a + b;
}
```
## This function can be written as an arrow function in the following way:

```javascript
const sum = (a, b) => {
  return a + b;
};
```

---
---
# Q4. What are template literals?
Template literals are a feature in JavaScript that make it easier to create strings. They allow you to insert variables and expressions directly inside a string and write multi-line text more easily.

## 1. Use backticks 
Template literals use backticks ( ) instead of single ' ' or double " " quotes.
```javascript
let name = "Rahim";
let message = `Hello ${name}!`;
console.log(message);
```
```output
Hello Rahim!
```
Here ${name} inserts the value of the variable into the string.

## 2. Insert variables or expressions
You can put variables or calculations inside ${ }.
```javascript
let a = 5;
let b = 10;
console.log(`Sum is ${a + b}`);
```
```output
Sum is 15
```
## 3. Multi-line strings
Template literals allow writing text on multiple lines easily.
```javascript
let text = `This is line 1
This is line 2
This is line 3`;
console.log(text);
```
```output
This is line 1
This is line 2
This is line 3
```
---
---




