<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>A</b></summary>
<p>

#### Answer: ?

<i>  (Answer is : A)   Assigned an empty object to the greeting is variable.
Here console.log(greeting) statement will display an empty object {} in the console </i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: ?

<i>(Answer is : C) . you are give 1 as the first argument and "2" as the second argument.
 First argument is a number, while the second argument is a string.
 JS converts the number 1 to a string and then concatenates it with the string "2", resulting in the string "12".</i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: ?

<i>(Answer is : A)  You assign a new value to the info.favoriteFood property, setting it to "🍝". This means you're changing the reference to a new string "🍝", and it is no longer associated with the original array element "🍕".
Changing the info.favoriteFood property does not affect the food array itself. It only changes the value of the favoriteFood property in the info object.</i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: ?

<i>(Answer is : B)   
In your sayHi function, you've defined a parameter name, which means it expects an argument to be passed when you call the function.
When you call a function without passing the expected argument, JavaScript will set the parameter to undefined. In your case, the name parameter will be undefined</i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: ?

<i>(Answer is : C) 0 is falsy, so it doesn't increment count.
1, 2, and 3 are truthy, so they each increment count by 1.
As a result, count will be 3 after the forEach loop has finished</i>

</p>
</details>
