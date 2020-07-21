# TypeScript Fundamentals - Table of Contents

This section covers the fundamentals of TypeScript using node as a compiler and working through the TypeScript documentation with examples of how to use TypeScript with vanilla JavaScript.

1. [Scaffolding and file structure](#Scaffolding-and-File-Structure)
2. [Compiling TypeScript to JavaScript](#Compiling-TS-to-JS)
3. [Node terminal commands for TypeScript and JavaScript](#Node-terminal-commands-for-TS-and-JS)

[SECTION 1](#Section-1:-Basic-Concepts-and-Types)
[SECTION 2](#Section-2:-Advanced-Types-or-Reference-Types)
[SECTION 3](#Section-3:-Classes-and-Constructors)
[SECTION 4](#Section-4:-Modules-and-Namespaces)
[SECTION 5](#Section-5:-Libraries-and-Type-Definitions)

[RESOURCES](#RESOURCES)

##### Scaffolding and File Structure

`npm install - g` - install node
`npm install -g typescript` install TypeScript

`rm -rf node_modules && npm install` recursively remove node and reinstall in case you make a mistake
Uninstalling packages documentation[https://docs.npmjs.com/cli/uninstall]

##### Compiling TS to JS

Create a variable in the `.ts` file `app.ts`

```
let message="hello world"
console.log(message);
```

In terminal run the command `tsc app && node app` for the `app.ts` file
As this is a TypeScript-Node-JavaScript project, you will get an error on the `.ts` file as the `.ts` file is a script file and shares global scope.

Node modules have their own scope and need `common.js` exports to export the module which is an empty function `{}`
Update the `app.ts` file with

```
export {}
// Test configuration
let message="hello world"
console.log(message);
```

In terminal re-run the command `tsc app && node app` for the `app.ts` file you should get the message in the terminal console.

Now that you have set up the files to compile correctly you can watch changes live in the node environment.

`tsc app` transpiles the file into a `.js` file. Go into the `app.js` file and you will see the compiler has changed the TypeScript file into a JavaScript file.

```
"use strict";
exports.__esModule = true;
// Test configuration
var message = "hello world";
console.log(message);
```

Each concept has its own `.ts` file with examples followed from both the official documentation and tutorials.

If you want to see this on the front end, create a html file and import the script from the `app.js` file not the `app.ts` file - Basic boiler plate below.

```
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TypeScript with Node</title>
    <script type='text/javascript', src='app.js'></script>
</head>
<body>
  <h1>TypeScript with Node</h1>
</body>
</html>
```

##### Node terminal commands for TS and JS

- tsc filename - this runs the tsc (TypeScript compiler) on the `.ts` file and compiles it to JavaScript
- node filename - The terminal console should print your message as the node environment is set up
- you can run both scripts with tsc filename && node filename eg. `tsc app && node app` for the `app.ts` file
- tsc filename --watch Updates in console all the changes in the `.ts` files in real-time, for advanced types it is better to update the tsc files in watch mode
- command k clears the terminal in the same directory and all history, command c clears terminal (MacOS)

I found at this stage this video tutorial very good for the set-up and scaffolding

- CodeEvolution: (Vishwas)
  Learn TypeScript in 50 mins (Good examples and scaffolding of typescript with node) [https://www.youtube.com/watch?v=WBPrJSw7yQA]

## Section 1: Basic Concepts and Types

Documentation: [https://www.typescriptlang.org/docs/handbook/basic-types.html]

Primitive types are passed by value. In this section we go through the basic concepts of TypeScript compilation into JavaScript with the primitive types.

- Strings
- Numbers
- Booleans
- The difference between Null, Undefined, Uknown, Void & Never

#### A note on variables

Variables are a namespace allocated in browser memory. With TypeScript you name the variable and add the type before you provide the value, examples in `variables.ts`

- Type inference - types are inferred at the time of variable initialisation but not afterwards, it is best practise not to rely on inference but to explicity define types

- Type annotation

* declare a variable, give the variable name a type identifier and assign it a value - `let/const name: type identifier = 'value'`

Variable declaration - ES6 `let` and `const` key words can be used they will be transpiled back into `var` by the TypeScript compiler.

In TypeScript you can use the key words of ES6 `let` and `const` that need to be declared at the top of a function block as they do not get hoisted, you will note that they are changed to the `var` key word in the TypeScript transpiler.

The `var` key word is hoisted no matter where it is placed in the function scope. `let` and `const` only have block scope - defined in a code block between curly braces. `let` values when transpiled are reassigned to a new variable - see the .js file where `let b` is reassigned to `let b_1` in the transpiled code.

Variable values can be reassigned but the types can't, types are inferred but even when the type is explicitly defined you can't reassign the type of a variable.

For example `var a = 10` infers the type as a number. You can reassign the value of a to 20, but if you reassign the value to ten `var a = 'ten'` this will throw a compile-time error in TypeScript. As TypeScript is a scripting language it runs each line of the code checks it and verifies the type. This strict typing in compile time prevents errors in run time.

Closures and immediately invoked functions (iffy's) should use the `let` or `const` key words.

#### A note on operators

TypeScript has the same operators and operands as JavaScript

- Assignment operators: Simple assignment (=) assigns from right to left, all the other operators perform the arithmetic operation from right to left and assign the new value to the value on the right {plus equals (+=), minus equals(-=), multiply equals (\*=) divide equals (/=)}
- Arithmetic: addition, subtraction, multiplication, division, modulus(returns quotient), increment and decrement
- Relational: Comparing values as greater than, less than, greater than & equal to, less than & equal to, equal (==), strictly equal (===), not equal(!=)
- Logical: And, Or, not (&& (true only if both sides true) (||(truthy returns true if one or other true)) !(inverse of the logic's result))
- Bitwise: Performs boolean opeation as well as and/or/not integer operations on each bit of the integer arguments they are represented by single symbol types And(&), or (|) not (~) this actually reverses the bits

#### Primitive types

Examples are in the file `primitive-types.ts`

- String `let name: string = 'Jhanavi'`
- Number `let age: number = 5`
- Boolean `let isDone: boolean = false;`
- Template Literal

```
let fullName: string = `Jhanavi Basappa`;
let age: number = 16;
let sentence: string = `Hello, my name is ${ fullName }. I'll be ${ age + 1 } years old next month.`;
```

- Numeric Literal - Defines specifically all the numbers exactly expected from the function

```
function rollDice(): 1 | 2 | 3 | 4 | 5 | 6 {
    // ... do something
}
```

#### The differences between Any, Null, Undefined, Never, Void, Unknown

More reading with good examples [https://wanago.io/2020/01/27/understanding-any-and-unknown-in-typescript-difference-between-never-and-void/]

Examples in this folder is in `primitive-types.ts`

- Any: Allows dynamic typing and is not strictly typed to any of the defined TypeScript types, allows JavaScript engines to decide what the implicit type is, it allows you to opt out of using TypeScript, runs normal compile time JS checks. It should be avoided at all costs as it defeats the purpose of type-checking.

```
let notSure: any = "not sure of the result, so it could be anything"

```

- Null: Describes a type with no value therefore a variable can be assigned to the type null. The type number with a value of 0 is still a number type with a zero rather than null value, an empty string is an empty space held by a string type. Null is a type of its own describing neither type nor value. Using `strictNullChecks` avoids the challenge of conflating nullable types - strings and numbers.

- Undefined: A variable that has been declared but not assigned a value. Logging the variable will return undefined. Often used as union types to provide variations of the possible answers `string| null | undefined`

The difference between null and undefined [https://levelup.gitconnected.com/javascript-null-vs-undefined-2acda986f79f]

- Unknown: Will be returned when the type is not known, it is more like any in compile time, it is considered a top type. It is different from any as during compile time any allows any type to be passed, whereas unknown will indicate no known type has been passed. This is a subtle difference that can be useful for debugging.

The difference between unknown & never [https://blog.logrocket.com/when-to-use-never-and-unknown-in-typescript-5e4d6c5799ad/]

- Never: Indicates something that never should happen you, it is a nullable type or an empty set. It is considered a bottom type. To use any or null loses out on the benefits of static typing and type checking.

Null can be a null type of string - an empty string, or as a number represented as 0. However, technically bitwise an empty string is not null and neither is 0. Never factors out in compile time and there is therefore a subtle difference. Is is often used to indicate an error message in promises and callback functions. It is also used to prune unwanted conditions in a conditional statement, loop or iteration.

```
function error(message: string): never {
    throw new Error(message);
}
<!-- with a reject promise call back -->
function timeout(ms: number): Promise<never> {
  return new Promise((_, reject) =>
    setTimeout(() => reject(new Error("Timeout elapsed")), ms)
  )
}
```

- Void: Used for functions that do not return any value, different from never which does not return any value void returns an empty value.

```
function warnUser(): void {
    console.log("This is my warning message");
}
```

This section is well explained by CodeEvolution from @25:00 mins in the YouTube tutorial [https://www.youtube.com/watch?v=WBPrJSw7yQA]

## Section-2: Advanced Types or Reference Types

Documentation: [https://www.typescriptlang.org/docs/handbook/advanced-types.html]

Other than primitive types that are passed by value, everything else in JavaScript is an object and are called reference types as their value is passed by reference.

In this section we see TypeScript working as a superscript of JavaScript with

- Objects, taking a deeper dive into object oriented programming (OOP) files `objects.ts & oop.ts`
- Functions, the basic building blocks of JavaScript programming files `functions.ts`
- Arrays, Tuples & Enums - basic data types used in TypeScript and JavaScript files `arrays.ts, tuples.ts & enums.ts`

In the advanced types compilation of ts files into js it is useful to see what is going on under the hood in the js files

#### A note about passing by value and reference

```
var x: number = 5
var y: number = x
var x: number = 10
console.log(x,`logs primitive value of x`)
console.log(y, `logs primivite value of y`)
```

In this example y will refer to x that has a value of the primitive 5, y will always have a value of 5 unless we reassign y. When we reassign the value of x to 10 the primitive value of x is updated because the primitive value is explicitly being changed.

The logs return

```
10 'logs primitive value of x'
5 'logs primivite value of y'
```

If we assign the vairable to an object with a value of 5, the variable a has reference of the value stored in the object in the browser; b will also point to this object in the browser and gets its value by its reference to the value stored in the object in memory. When we reassign the value of a to 10 the variable b is still pointing to the object in memory which is a, and when a changes it changes as it inherits the value of the object that it is pointing to and gets its value by its reference to the object a which is always stored in memory and is being updated in memory (the browser). In TypeScript you will see this reference immediately if you hover over b and y. BY inference, the linter will show b is a reference object to a, y will be a number.

```
var a = {value:  5}
var b = a
a.value = 10
console.log(a, `logs a as an object`)
console.log(b, `logs b as referenced to the object a`)
```

The logs return the object and the reference to the instance of the object a that has been reassigned to be

```
{ value: 10 } 'logs a as an object'
{ value: 10 } 'logs b as referenced to the object a'
```

This demonstration of how objects work, makes it easier to understand classes, constructors, class extension and inheritance as well as how the key word `this` works in object oriented programming.

#### Objects

Objects are unordered lists with properties and methods. Properties hold static values, while methods hold dynamic logic of the code block to be executed. Three key features of objects, they are:-

1. Stateful of have data that describes the attributes of the object
2. They have behavior (methods) that describes how they will act
3. They are unique

With TypeScript each property has both a type and a value. Unless notated with a question mark, properties are by default mandatory and will be inherited by future iterations of the object.

There are 2 ways of declaring object literals

- ES2015 - looks like JSON (JavaScript Object Notation)

```
let fN = "first name"
let lN = "last name";
let teacher = {
    "first name": "Scarlet",
    [lN] : "o'Hara"
}
```

Object literal

```
let firstName: string ="Janet"
let lastName: string = "Pink"
let person = {
    firstName: firstName,
    lastName: lastName
}
```

#### OOP - Object Oriented Programming

OOP is a style of programming different from functional programming. Functional programming where a series of prescriptive factory functions are written leads to interdependency of code and what is known as spaghetti code.

Factory function

```
function getTotalPrice(price: number = 0, salesTax: number = 0,miscExpense: number = 0) : number {
    return price + (price*salesTax) + miscExpense;
}
console.log(getTotalPrice(100, 0.20, 12 ))
```

OOP on the other hand is based on four core principles that make code more extensible and reusable

```
let calculatePrice = {
    price: 25,
    salesTax: 0.1,
    miscExpense: 3,
    printReceipt: function(){
        return this.price + (this.price * this.salesTax) + this.miscExpense;
    }
}
```

- Encapsulation - encapsulating all the variables and the methods in an object, reduces complexity and increases extensibility of code. See examples in `objects.ts`

- Inheritance - the properties and methods of objects can be reassigned to new objects, they will inherit the same types and values as the parent object. They eliminate redundant code. Methods of constructor and super are called in the extended classes. See examples in `inheritance.ts`

- Abstraction - by default properties are public and available to all objects based on the objects prototypal inheritance. However some properties and methods can be contained privately within the object, or abstracted within the object. This makes the interface of this object with the rest of the code simpler. It also reduces the impact of change, private methods change the object without leaking to the code outside and causing side effects. See examples in `abstraction.ts`

- Polymorphism - many forms of the object helps refactor code and make it simpler. For example you can eliminates long if/else and switch conditional statements to render different elements of the HTML DOM eg. `element.render` can be written as a method to render different HTML elements by creating a class with a render method - this concept is used in React and MVC (model, view, control) libraries whilst DOM manipulation is based on factory functions

#### Functions

Documentation [https://www.typescriptlang.org/docs/handbook/functions.html]

JavaScript is a functional programming language. Examples in `functions.ts`
Functions are nothing but objects with a block of logic. All functions are therefore methods of the class Object. Functions are core building blocks of both JavaScript and TypeScript. They perform the key role of telling the code how to do things or what needs to be executed.

- Inferred param types - params have an inferred type by use, but also can be explicitly defined
- Default params - a default param can be added as a fall-back value
- Rest param - these are placeholders for a list of params of the same type
- Mandatory params - all params in the function are mandatory unless explicity notated as optional
- Optional params - notated with question mark
- Union type params - allows multiple types for the same value - notated with the pipe symbol - allows the last name to be a string, undefined, or null - used because with API's or libraries, or user input it is not known what the exact type will be, it limits the number of options rather than using any which becomes difficult to debug.

- Function declaration - function name declared with the function keyword.

```
 <!-- this will result in an error as the optional type is in the middle-->

 function createStudentName(firstName: string, middleName?: string, lastName: string){
    return firstName + middleName + lastName
}
  <!-- CORRECT as the optional type is at the end-->

function fullName(firstName: string, middleName: string ="", lastName?: string | undefined | null ): void{
   console.log (`Hi my name is ${firstName} ${middleName} ${lastName}`)
}
```

- Function Expression or Anonymous Functions - function assigned to a variable & the variable is called to invoke the function. The function key word is used after the variable assignment to the function.

```
let getTeacherTimeTable = function (subject:string, classNumber: number) {
    return `${subject} Teacher for the ${classNumber} Standard`
}
console.log (getTeacherTimeTable('Maths', 7))
```

- Lamdas or Anonymous (Arrow) Functions - the function is assigned to a variable, the fat arrow is an implict return amd binds lexical `this` to the object it points to, in this case the function. The function key word is also remoeved.

```
let getTeacherNames = (firstName:string, lastName: string) => {
    return `{firstName} {lastName}`
}
console.log ((getTeacherNames('Arthur', 'Chamraj'))
```

- Functions written as Type Guards

Checks types within the scope of the function argument. It is TypeScript checking itself for unknown types and guarding against the use of mixed types. for example in this function, it is not clear whether the return should be a number or a string even if you add TypeScript types. The type guards makes sure you are not mixing types and creating errors in compile time. Take this function without TypeScript it can return any type - string or number and type coercian can take place in compile time in JavaScript and a runtime error can occur.

```
 function addTwoNumbers(num1, num2){
     return num1 + num2
 }
```

Keywords - typeof(for objects)/ instanceof (for constructors)/ in (for objects and constructors) are used in type checking. The parameters of this function can be assigned a union type of either string or number so you need to also assign the return to a type and use the `.toString()` method so that the numbers are always returned as a string. You also need to create the function return as a conditional statement so that it is clear what the function control flow is checking and the default is treating both arguments in the function as a string to prevent errors.

In the first log the numbers are added as the plus operator is used as an arithmetic operator, in the second log the plus operator is used to concat 2 strings.

```
function addTwoNumbers(num1:string|number, num2: string|number): string|number {
   if (typeof num1 === "string"){
       console.log("The first function parameter is a string ")
       return num1 + num2
   }
   if (typeof num1 === "number" && typeof num2 === "number"){
       console.log("Both parameters of the function are numbers")
       return num1 + num2
   }
    return num1.toString() + num2.toString()
}
console.log(addTwoNumbers(5,4))
console.log(addTwoNumbers("four", "four"))
```

##### Looped functions or iterations

Loops or iterations are functions that iterate over elements in the condition expression checking if they are true or false executing the condition expressions that are true and exiting as soon as they find a false statement. File `iterations.ts`
Definite Loops: Performs the loop for a definite number of iterations
for-loop: `for(condition expression -initialiser, condition expression -logic, condition expression -increment or decrement){}`
Indefinite Loops: Performs a continous loop so long as true can be returned
while-loop: `while(condition expression){}`
do-while loop: `do{}while(condition expression)`

Iterations can also be performed over the keys of an object or an array.

##### Loop & Break functions or Conditional Statements

Loops and conditional statements are code blocks for steps that have to be repeated over elements of the code block following certain conditions.

Typescript helps to strictly define each element in the code block by its type, examples of the loops and conditions outlined below in `iterations.ts`
Loops - for-loop, while-loop, do-while-loop
Conditions - if, if-else are condition expressions in a code block
Combination of loops and conditions - for-if
Higher order functions - forEach are performed on arrays and objects

#### Arrays, Tuples & Enums

- Arrays are ordered and 0-based indexed lists. They provide an index number to the element they refer to in the array and the start of the index is always 0.

They can be written in 2 ways in TypeScript

- `let list: Array<number> = [1, 2, 3];`
  OR
- `let listNames: string[] = ['Ravi', 'Ravinder', 'Ravindernath'];`
- `let checkBig: boolean[] = [true, false, false];`
- `let listNumbers: number[] = [1, 2, 3];`

With an array of objects, you can use array methods on the array, and use mixed types in the object nested in the array

```
//enum declaration
enum LanguagesKnown {English, French, Italian, Spanish}

// object declaration
let student = {
    Name: "Anil",
    Age: 5,
    Sex: 'M',
    Phone: 1314,
    Email: "anil@anil.com",
    Languages: [LanguagesKnown.Italian]
}
let studentsInfo = [
    {Name:"Rani", Age: 20, Sex: "F", Phone: 1234, Email:'rani@ranijhansi.com', Languages: [LanguagesKnown[0]]},
    {Name:"Raja", Age: 29, Sex: "M", Phone: 4567, Email:'raja@rajaram.com', Languages: [LanguagesKnown[1]]},
    {Name:"Ruby", Age: 5, Sex: "F", Phone: 8910, Email:'ruby@rubyroo.com', Languages: [LanguagesKnown.Italian]},
    {Name:"Ruba", Age: 12, Sex: "M", Phone: 1112, Email:'ruba@rubaroo.com', Languages: [LanguagesKnown.Spanish]}
]
// use an array method
studentsInfo.push(student)
console.log("LOGS: Array of objects:", studentsInfo )

// Looping through an array with a function
function getStudentInfo(students: any[]){
    // let students = [] do not need to declare the variable as it is in the param
    students.forEach(student => {
        console.log(`Hi I'm ${student.Name}, I speak ${student.Languages} phone me on: ${student.Phone}`)
    });
}
getStudentInfo(studentsInfo)
<!-- Logs with the index will give you the name of the language, logs with the name of the language gives you the number of the index in the enum -->
```

- Tuples are defined number of elements in an array - this is strictly fixed in terms of the number, types, order and elements. Tuples allow you to outline a FIXED number of elements in an array of mixed types - you can not change the order of the types in the elements in a tuple. Tuples do not exist in JavaScript, they are transpiled back into an array. However by fixing the type you are strictly defining the elements by order and type using TypeScript. See `tuples.js`

```
let shoppingList: [number,string] =[ 1, 'milk']
console.log(shoppingList)
```

- Enums add a numeric value to an object `enum List {Milk, Bread, Eggs}` the values are zero indexed by default, so milk is 0, bread is 1 and eggs 2.

These values can be changed manually `enum List {Milk = 1, Bread = 2, Eggs = 4}` or the start of the index can be changed `enum List {Milk = 1, Bread, Eggs}`, then bread becomes 2 and eggs 3. You can look up the index value in an enum to check what its value is.

```
enum List {Milk = 1, Bread, Eggs}
let shoppingList: string = List[2];
console.log(shoppingList); // Displays 'Bread' as its value is 2 above
```

The state of the door as open is indexed at 0 with closed and ajar at 1 and 2. Typescript does not recognise console logs as these are JavaScript commands - note the case in a enum declarations

```
enum DoorStats{
    Open,
    Closed,
    Ajar
}
```

Enums do not exist in JavaScript. They are transpiled back as a function, so look at the `enums.js` file and note how the function tranforms the enum object into an ordered list of key-value pairs.

#### Deconstructing Objects & Arrays

- Spread operator

All key-value pairs need to be given a type and a type alias assigned to call the operator, here studentName is the alias for the spread operator

```
<!-- {...studentName} will throw errors -->
const studentName: {
className?: string | undefined;
id?: string | undefined;
disabled?: boolean | undefined;
}
```

2 spread operators are changed to a variable and the variable is invoked

```
{...studentName, ...teacherName}
const studentName & teacherName =
const studentName: {
className?: string | undefined;
id?: string | undefined;
disabled?: boolean | undefined;
},
const teacherName {
readonly id: number,
        name: string,
        surname: string
}
```

In a function with an array

```
function createName (firstName: string, ...otherNames: string[]){
    return firstName + " " + otherNames..join(" ")
}
```

- Rest operator

  Works as placeholders for mutliple arguments of the same type in an array

```
function getNumbers(...nums: number[]){
    nums.forEach(element => {
        console.log('Number:' + element)
    })
}
getNumbers(1,2,3,4)
```

## Section-3: Classes and Constructors

[https://www.youtube.com/watch?v=n3zrCxB8sj8&list=PLC3y8-rFHvwhI0V5mE9Vu6Nm-nap8EcjV]

#### Classes

Classes are special types of functions created in ES6 to replace prototypal inheritance. Classes help in writing dry code. Look at the difference between boiler plate code of the objects file vs the classes file. Classes make the code more extensible, instead of copying and pasting objects a class with a constructor can be used anywhere in the code base.

The class function is declared not with the function key word but the class keyword. The block of code in the class function (or the class body) can only contain methods not properties. There are 3 types of methods.

- the constructor method - creates and initalises an object, only one allowed in every class
- prototype methods - that can be modified
- static methods - that can not be modified
- classes can be extended with a super method declared after the constructor method
- super calls upon the constructor method of the class that it extends
- class abstraction - it is the base class that can not be modified

```
// class declaration
class StudentsPeformance {
    studentName: string
    subject: string
    studentMarks: number
// constructor method
    constructor (studentName: string, subject: string, studentMarks: number){
        this.studentName = studentName
        this.subject = subject
        this.studentMarks = studentMarks
    }
// prototype methods that can be modified
    getNameAndMarks(){
        return `In ${this.subject}, ${this.studentName}  achieved ${this.studentMarks} out of a total of 500 points`
    }
}
let sP1 = new StudentsPeformance ("Rohini", "History-Economics-Psychology-Sociology & English", 475)
console.log(sP1.getNameAndMarks())
```

While functions are hoisted, classes can not be called before they are declared. At compile time, an error will be thrown if the class is called before it is declared.

`classes.ts:16:13 - error TS2448: Block-scoped variable 't1' used before its declaration.`

#### Constructor method

- Only one constructor method is allowed in every class as it is creating/ constructs the blueprint and there can only be one blueprint
- The constructor method creates an empty object with all the properties and methods of the class function - creates the blueprint that is stored in the browser memory
- This blueprint is stored in the global object/ the window/ the browser memory
- The class points to the blueprint in the browser window - with node it points to the global object in `node.js`
- The class with its constructor method is instantiated when you assign the blueprint to a variable with the new key word
- The new key word does three things
  - creates a new replica of the blueprint
  - this replica is an empty object and you can assign props and methods based on the original blueprint as it inherits all the props and methods of the blueprint (the empty object in the window memory)
  - lexical this now points to the variable containing the new information assigned to the variable
  - new methods and properties that are not in the original can be added to the new replica of the blueprint object

#### Class extension and the super method

Classes can be extended. Once extended the new extended class must be instatiated.
In the new instance of the class all the props and methods of the parent class. To execute the constructor method, the super method is declared after the constructor method. Super calls upon the constructor method of the class that it extends.

```
class Teacher {
    name: string
    constructor(name: string){
        this.name = name
    }
    greet(){
        console.log(`Good morning ${this.name} is logged from Teacher class`)
    }
}
let person = new Teacher('Mrs. Petrus')
console.log(person)
console.log(person.greet())

class Highschoolteacher extends Teacher {
    greet(){
         <!--overwrites the parent method  -->
        console.log(`Good afternoon ${this.name} is logged from HighSchoolteacher class`)
        <!-- calls the parent method -->
        super.greet()

    }
}
let person1 = new Highschoolteacher("Mrs. Rebello")
console.log(person1)
console.log(person1.greet())
```

#### Lexical this

It is important to remember that the `this` key word can be extended from the global object created by classes and their constructor method and therefore point to the class it extends. This in the extended class points to the new extended object/ blueprint/ class.

As the values of the object are passed by reference, `this` passes the values of one class to the extended class. When the code is being compiled, the parsers look at the `this` key word and the object it points to to run the code.

Accidental bugs can be called when the `this` key word points to the global object instead of the class that it extends and it is referring to. Therefore this needs to be bound to the object by the `this.bind()` method or the fat arrow. The global object has the bind method - window.bind() and any other object that is stored in the window object uses lexical `this.bind()` to bind it to the specific object it is referring to.

More reading on the `this` keyword [http://unschooled.org/2012/03/understanding-javascript-this/]

##### Types & Classes

- Interface Types - Duck Typing, Structural SubTyping
  Interfaces are custom types that describe types in a class. They enforce the type of each item in an object that can be used later. Interfaces describe the contract between the code in the class and its use in other parts of the code base. They are not converted to JavaScript and have zero runtime impact.

Note: There can only be one base class but there can be several interface types for that class and extensions of that interface inherit the type of the base class.

```
interface IPerson {
    id: number
    firstName: string
    lastName: string
}
let person: IPerson = {id:10, firstName:"Joan", lastName:"Hicks"}
console.log(person)

interface IPersonJuniorSchool extends IPerson {
    subject: string
    timeTable: Array<number>
}
interface IStudent extends IPerson{
    Age: number,
    Sex: string,
    Phone: number,
    Email: string,
    Languages: string
}
```

This is a useful reference for Interfaces:
[https://www.tutorialspoint.com/typescript/typescript_interfaces.htm]

```
<!-- Factory function -->
let personTeacher = (id:number, firstName: string, lastName:string) => {
    console.log( `${id}) ${firstName} ${lastName}`)
}
personTeacher (5, "Ruth", "Kinsella")

<!-- interface declaration -->
interface IPersonTeacher {
    id: number
    firstName: string
    lastName: string
}

let juniorSchoolTeacher: IPersonTeacher = {id:1, firstName:"Joan", lastName:"Hicks"}
console.log(juniorSchoolTeacher)
```

- Generic Types
  Generic Types allow you to work with multiple types, these are bespoke types written to suit your app's use cases

- Intersection Types
  Two or more types permitted for use denoted by the single amperestand

- Type Aliases
  A convenient naming convention that allows you export a type of class by another name

```
interface IPerson {
    id: number
    firstName: string
    lastName: string
}
let person: IPerson = {id:10, firstName:"Joan", lastName:"Hicks"}
console.log(person)

interface IPersonJuniorSchool extends IPerson {
    subject: string
    timeTable: Array<number>
}
interface IStudent extends IPerson{
    Age: number,
    Sex: string,
    Phone: number,
    Email: string,
    Languages: string
}
<!-- Aliases the interface to a more readable type when it is used in code base -->
export {IPerson, IPersonJuniorSchool as TeacherJrSchool, IStudent}
```

## Section-4: Modules and Namespaces

Modules are executed in their own scope. To share code from one module to another, a module loader is required. Files are then exported from one module and can be used any any module that imports the exported module.

Module loaders are used to load multiple dependent modules from different locations of an app. They are fast and asynchronous and hasten application loading times defining methods in one module before the methods are called in an another module. The module loader compiles code in run-time and executes the code blocks that are exported and imported within the code base. Each has their own syntax, the default is `common.js` but `require.js` is also used - checking documentation for syntax is useful if you are using different module loaders.

Some popular module loaders

- CommonJs (for node)
- SystemJS
- ES2015
- AMD
- UMD
- Browserify
- Webpack
- RequireJS

Exports of variables, classes, functions are all possible in this modular structure.

- Default export - there can be only one per module
- Export all - Multiple classes and variables can be exported with the asterix symbol used to import these exports `import * as nameOfexport from '/filepath'` the export file exports the code blocks, like so: `export{codeblock1, codeblock2, codeblock3 as nameOfexport }`
- Export an Alias - See Type Aliases

* A note on namespaces

Declared with the `namespace` keyword helps manage a clash of modules with the same name, mainly used to maintain legacy code, modules are better than the use of namespaces.

```
namespace studentPayments {
    export function calcuateFees(terms:number, fee:number){
        return terms*fee
    }
}
```

Calling a namespace using triple slash is important as it is not module just a name space, the file extension `.ts` also has to be named explicitly

```
/// <reference path = "./nameOfFilePath.ts" >

let feesPayed = studentPayments.calculateFees(4, 2000)
```

- A note on the ts.config file - defines the complier being used - in this file you can see common.js is the compiler

## Section-5: Libraries and Type Definitions

Type definitions are used when there are JavaScript libraries or a host APIs. Each library has it's own type definitions and to get these definitions, they are in `.d.ts` files.

You need to add this to the scaffolding - `npm install tsd -g` (globally in the project) plus the library required. For React we will run through the detail in the `/react-ts` folder.

`tsd` is deprecated, typings.json has replaced it

Libraries and type definitions [https://www.npmjs.com/~types]
eg. `@types/react` for react or the Microsoft search [https://microsoft.github.io/TypeSearch/]

## RESOURCES

The content of this readme relies on all the tutorials listed in this section. The best TypeScript Tutorial
[https://www.tutorialspoint.com/typescript/]. Highlights from the rest are:-

- Scaffolding was best explained by CodeEvolution's Vishwas.
- Edureka had a good theoretical framework for the basics and a quick overview.
- Karthik's Udemy tutorial (2.5 hours) was best for Typescript good examples to follow - this formed the core part of the work in this folder.
- Moshe's OOP tutorial is excellent to get a better understanding of objects, classes and inheritance.
- Savjee was a good reminder and review, some excellent examples to follow and code along.
- Awais Jamil's is a slog with 5.5 hours to watch.

I found it useful to watch chunks of the tutorials where I got stuck and embed knowledge once the basics have been grasped. They offered me good examples above and beyond the TypeScript documentation.

##### Tutorial List and links

- Udemy - Free with certification of attendance

* Karthik K - TypeScript Fundamentals, good quick overview with good examples (2.5-hours with completion certificate)
* Awais Jamil-Mirza - (5.5 hours, paid course is 7++ hours) A long slog but useful to go back to it, there is a shorter YouTube version
* Daniel Stern - Intro to Typescript only section 3 useful videos 8-11, code examples not very good(1-hour with completion certificate)

- YouTube: Videos followed for revision and better understanding of TS

* Edureka: TypeScript Tutorial for Beginners (1-hour) [https://www.youtube.com/watch?v=82XE1X0Xblo]
* CodeEvolution: (Vishwas)
  Learn TypeScript in 50 mins (Good examples and scaffolding of typescript with node) [https://www.youtube.com/watch?v=WBPrJSw7yQA]
  ES6 (this is a little confusing for pure Typescript, you need to interpolate and create the types yourself a good practice video after you learn the basics) [https://www.youtube.com/watch?v=n3zrCxB8sj8&list=PLC3y8-rFHvwhI0V5mE9Vu6Nm-nap8EcjV]
* OOP - Moshe - excellent well explained with good examples [https://www.youtube.com/watch?v=PFmuCDHHpwk]
* Simply Explained: (Savjee)
  TypeScript [https://www.youtube.com/playlist?list=PLzvRQMJ9HDiQyjtcrtvDkeQMJIrv5ABbm]
* Awais Jamil-Mirza (2.5 hours edited version of the Udemy Free Course) [https://www.youtube.com/watch?v=I-dml1IDyBc]
