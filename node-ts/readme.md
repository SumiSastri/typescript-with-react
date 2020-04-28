# Typescript fundamentals
This section covers the fundamentals of Typescript using node as a compiler 

##### Scaffolding & File Structure 
Global installs
node 
npm
npm install -g typescript

Mkdir for project (node-ts)
Cd into directory (node-ts)
Create a .ts file
Touch app.ts

[rm -rf node_modules && npm install] recursively remove node and reinstall in case you make a mistake

##### Compiling:

Create a variable in the .ts file <primitive-types.ts>

```
let message="hellow"
console.log(message);
```

##### Terminal commands: 
* tsc filename - this runs the tsc (typescript compiler) on the .ts file and compiles it to javascript
* node filename - The terminal console should print your message as the node environment is set up

However as this is a typescript-node-javascript project, you will get an error on the .ts file
The .ts file is a script file and shares global scope and throws the error
Node modules have their own scope and need common.js exports to export the module which is an empty function ```{}```

* tsc primitive-types again and you will see the node environment in work - the export is imported into the .js file

```
"use strict";
exports.__esModule = true;
var message = "hellow";
console.log(message);
```

Now that you have set up the files to compile correctly you can watch changes live in the node environment
* tsc filename --watch - This updates in console all the changes in the .ts files as each is updated
* command k clears the terminal in the same directory

For advanced types it is better to update the tsc files in watch mode

##  Section 1: Basic Concepts & Types

Documentation: [https://www.typescriptlang.org/docs/handbook/basic-types.html]

* Type annotation
-  declare a variable, gve the variable name a type identifier and assign it a value - ```let/const name: type identifier = 'value' ```

#### A note on variables

Variable declaration - ES6 ```let``` and ```const``` key words can be used they will be transpiled back into ```var``` by the typescript compiler. 

In Typescript you can use the key words of ES6 ```let``` and ```const``` that need to be declared at the top of a function block as they do not get hoisted, you will note that they are changed to the ```var``` key word in the typescript transpiler. The ```var``` key word is hoisted no matter where it is placed in the function scope. ```let``` and ```const``` only have block scope - defined in a code block between curly braces. ```let``` values when transpiled are reassigned to a new variable - see the .js file where ```let b``` is reassigned to ```let b_1``` in the transpiled code.

Closures and immediately invoked functions (iffy's) should use the ```let``` or ```const``` key words

#### Primitive types

- String ```let name: string = 'Jhanavi' ```
- Number ```let age: number = 5```
- Boolean ```let isDone: boolean = false;```
- Template Literal

```
let fullName: string = `Jhanavi Basappa`;
let age: number = 16;
let sentence: string = `Hello, my name is ${ fullName }. I'll be ${ age + 1 } years old next month.`;
```
- Numeric Literal - Defines specifically all the numbers exactly expected from the function

```
function rollDice(): 1 | 2 | 3 | 4 | 5 | 6 {
    // ...
}
```
#### The differences between Any, Null, Undefined, Unknown, Never, Void & Unknown

* Any: Allows dynamic typing and is not strictly typed to any of the defined TypeScript types, allows JavaScript engines to decide what the implicit type is, it allows you to opt out of using TypeScript, runs normal compile time JS checks

```
let notSure: any = "not sure of the result, so it could be anything"

```

* Null:  Null describes a variable that has no value as compared with a value of zero, zero is a value. Therefore null describes the absence of a value.

* Undefined: Allows the possibility for no definition of the type. Often used as union types to provide variations of the possible answers ```string| null | undefined``` 

* Never: Is used to indicate an error message, if you want something to never happen you use this type definition

```
function error(message: string): never {
    throw new Error(message);
}
```
* Void: Can also be used as an error message - commonly used for functions that do not return any value

```
function warnUser(): void {
    console.log("This is my warning message");
}
```
* Unknown: Will be returned when the type is not known

## Section 2 : Advanced Types
Everything in JavaScript is an object including Arrays, Tuples & Enums, there are .ts extensions to each of these advanced types

 - Objects and object oriented programming
 - Functions
 - Arrays, Tuples & Enums

In the advanced types compilation of ts files into js it is useful to see what is going on under the hood in the js files
[https://www.typescriptlang.org/docs/handbook/advanced-types.html] 

#### Objects 

Object literals have properties and methods. With type script each property has both a type and a value. Unless notated with a question mark, properties are by default mandatory 

Two ways of notating objects

```
let lN = "last name";
let teacher = {
    "first name": "Scarlet",
    [lN] : "o'Hara"
}
console.log(teacher)
console.log(teacher["first name"])
console.log(teacher[lN])
```
#### OOP - Object Oriented Programming
OOP is a style of programming different from functional programming. Functional programming where a series of prescriptive factory functions are  written leads to interdependency of code and what is known as spaghetti code.

OOP on the other hand is based on four core principles that make code more extensible and reusable

- Encapsulation - encapsulating all the variables and the methods in an object, reduces complexity and increases extensibility of code

- Inheritance - the properties and methods of objects can be reassigned to new objects, they will inherit the same types and values as the parent object. They eliminate redundant code

- Abstraction - by default properties are public and available to all objects based on the objects prototypal inheritance. However some properties and methods can be contained privately within the object, or abstracted within the object. This makes the interface of this object with the rest of the code simpler. It also reduces the impact of change, private 
methods change the object without leaking to the code outside and causing side effects

- Polymorphism - many forms of the object helps refactor code and make it simpler. For example you can eliminates long if/else and switch conditional statements to render different elements of the HTML DOM eg. ```element.render``` can be written as a method to render different HTML elements by creating a class with a render method - this concept is used in React and MVC (model, view, control) libraries whilst DOM manipulation is based on factory functions

#### Functions

Documentation for functions in typescript
[https://www.typescriptlang.org/docs/handbook/functions.html]

* Function declaration - function name declared with the function keyword/ Typescript function declaration has types assigned to every param 
* Default types - adds default to lastName if no value provided
* Optional types - notated with question mark at end of all params
  
 ```
  function createStudentName(firstName: string, middleName?: string, lastName: string){
     return firstName + middleName + lastName
     <!-- this will result in an error -->
 }
 function createStudentName(firstName: string, lastName: string, middleName?: string,){
     return firstName + middleName + lastName
     <!-- CORRECT -->
 }

 ```
* Anonymous Functions - function assigned to a variable, function key word used, called during runtime 

```
let getTeacherTimeTable = function (subject:string, classNumber: number) {
    return `${subject} Teacher for the ${classNumber} Standard` 
}
console.log (getTeacherTimeTable('Maths', 7))
```

* Lamda or Arrow Functions - function assigned to a variable, function keyword removed, fat arrow is an implict return amd binds lexical ```this``` to the object it points to, in this case the function

```
let getTeacherNames = (firstName:string, lastName: string) => {
    return `{firstName} {lastName}` 
}
console.log ((getTeacherNames('Arthur', 'Chamraj'))
```
#### Arrays, Tuples & Enums
- Array - can be written in 2 ways

  -  ```let list: Array<number> = [1, 2, 3];```
   OR
  -  ```let listNames: string[] = ['Ravi', 'Ravinder', 'Ravindernath'];```
  -  ```let checkBig: boolean[] = [true, false, false];```
  -  ```let listNumbers: number[] = [1, 2, 3];``` 

- Tuple:
It is a defined number of elements in an array - this is strictly fixed in terms of the number of elements, TypeScript allows you also to sctrictly define the type of the elements in the tuple. An array only allows for one type in the whole array, while a tuple allows mixed types.

```let list: number[] = [1, 2, 3];``` in Typescript - which strictly types the JavaScript array ```let list = [1,2,3]``` You can also write this in Typescript as ```let list: Array<number> = [1, 2, 3];```

Tuples allow you to outline a FIXED number of elements in an array of mixed types ```let list =[ 1, 'milk']``` in TypeScript it is ```let list: [number, string]```

- Enum:
Gives a readable name to numerical values  ``` enum List {Milk, Bread, Eggs}``` the values are zero indexed by default, so milk is 0, bread is 1 and eggs 2. These values can be changed manually ```enum List {Milk = 1, Bread = 2, Eggs = 4}``` or the start of the index can be changed ```enum List {Milk = 1, Bread, Eggs}```, then bread becomes 2 and eggs 3. You can look up the index value in an enum to check what its value is.

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
## Section 3: Classes & Constructors
[https://www.youtube.com/watch?v=n3zrCxB8sj8&list=PLC3y8-rFHvwhI0V5mE9Vu6Nm-nap8EcjV]

Classes are special types of functions created in ES6 to replace prototypal inheritance. While functions are hoisted, classes can not be called before they are declared. The class function is declared not with the function key word but the class keyword. The block of code in the class function (or the class body) can only contain methods not properties. There are 3 types of methods
  - the constructor method - creates and initalises an object, only one allowed in every class
  - prototype methods - that can be modified
  - static methods - that can not be modified
  - classes can be extended with a super method declared after the constructor method
  - super calls upon the constructor method of the class that it extends
  - class abstraction - it is the base class that can not be modified

Classes help in writing dry code 
    - look at the difference between boiler plate code of the objects file vs the classes file
    - classes make the code more extensible, instead of copying and pasting objects a class with a constructor can be used anywhere in the code base

#### Interface Type - Duck Typing, Structural SubTyping

  When params of a function become bloated, it is better to use an object to describe the params, interface declaration describes the contract between the code and its use in other parts of the code base. The personTeacher object is the code and the interface declaration gives a type for each param as a key-value pair in an object. 

```
<!-- Anonymous Function -->
   let personTeacher = (id, firstName, lastName) => {
        return `{id} {firstName} {lastName}`
  }
  console.log(personTeacher (5, Ruth, Kinsella))

   let personTeacher= (teacher) => {
        return `{id} {firstName} {lastName}`
  }
  console.log(personTeacher (5, Ruth, Kinsella))
   }

<!-- Creating an object for the params -->
 personTeacher({
    id: number,
    firstName: string,
    lastName: string
    })

<!-- ... inline annotation of anonymous function -->
   let personTeacher = ({id: number, firstName: string, lastName: string}) => {

  }
  ```
  However, a cleaner way way is to create a custom type that then can be used anywhere in the code base. Create the interface with all the parameters using the keyword interface. The variable is in Pascal case as it is a constructor. The object instance is assigned to the interface and then invoked. An interface becomes a blueprint for an object or the contract between the object and how it will be used in other parts of the code base.

```
<!-- interface declaration -->
interface PersonTeacher {
    id: number,
    firstName: string,
    lastName: string
}
<!-- anonymous function with an interface showing the contract between the code (interface declaration) and its use later in the code base (the anonymous function). The contract is every teacher in this anonymous function must have a teacher type, which is a strictly typed teacher object as defined by the interface PersonTeacher -->

let teacher: PersonTeacher){
    id: 5,
    firstName: 'Ruth',
    lastName: 'Kalyanasundaram'
}

```
#### Type Guards 

Checks types within the scope of the function argument. It is Typescript checking typescript for example in this function, it is not clear whether the return should be a number or a string even if you add TypeScript types. The type guards makes sure you are not mixing types and creating errors in compile time.
Keywords - typeof(for objects)/ instanceof (for constructors)/ in (for objects and constructors)

```
 function addTwoNumbers(num1, num2){
     return num1 + num2
 }
 ```
 The parameters of this function can be assigned a union type of either string or number so you need to also assign the return to a type and use the toString method so that the numbers are always returned as a string. You also need to create the function return as a conditional statement so that it is clear what the function control flow is checking and the default is treating both arguments in the function as a string to prevent errors.

 ```
function addTwoNumbers(num1:string|number, num2: string|number): string|number {
    if (typeof num1 === "string"){
        console.log("The first function parameter is a string ")
        return num1 + num2
    }
    if (typeof num1 === "number" && typeofarg2 === "number"){
        console.log("Both parameters of the function are numbers")
        return num1 + num2
    }
     return num1.toString() + num2.toString()
 }
``` 
#### Intersection Types
Two or more types with the amperestand

#### Union Types
Two or more types with the pipe symbol
  
 ```let numberType: string| number```

#### Type Aliases
A convenient naming convention for Union Types

 ```
 let stringOrNumber = string| number
 
 function addTwoNumbers(num1:stringOrNumber num2: stringOrNumber): stringOrNumber {
    if (typeof num1 === "string"){
        console.log("The first function parameter is a string ")
        return num1 + num2
    }
    if (typeof num1 === "number" && typeofarg2 === "number"){
        console.log("Both parameters of the function are numbers")
        return num1 + num2
    }
     return num1.toString() + num2.toString()
 }
 ```
#### Rest operator 
  
  Works as placeholders for mutliple arguments of the same type in an array

```
function getNumbers(...nums: number[]){
    nums.forEach(element => {
        console.log('Number:' + element)
    })
}
getNumbers(1,2,3,4)
```
#### Spread operator

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
 - Union Types
 - Type Aliases
 - Type Guards
 - Intersections

##  Section 4: Modules, index.d.ts

Module loaders are used to load multiple dependent modules from different locations of an app. They are fast and asynchronous and hasten application loading times defining methods in one module before the methods are called in an another module. Some popular module loaders and system languages. These are outlined in the ```tsconfig.json``` files.
* CommonJs
* SystemJS
* ES2015
* AMD
* UMD
* Browserify
* Webpack
* RequireJS
 
```
interface StudentInfo{
    Name: String,
    Age: Number
}
export {StudentInfo}
<!-- Or as an alias 
export {StudentInfo as HighSchoolStudents}
-->
```
When it is imported, the file can be used in a new instance of the interface of the class component, make sure the right type is being used in the imported file.

```
import {StudentInfo} from <'filepath'>

<!-- Importing the alias
import {HighSchoolStudents} from <'filepath'>
 -->

let student: StudentInfo ={
<!-- with the alias 
let student: HighSchoolStudents{ 
    -->
    Name: "Rasheed",
    Age: 21
}
```
Default exports are different as you can only have one default export per module so when you export a file you use the export default key word with the module you want to export. 

```
export default class Car {
    constructor (private make, private model){}
    getMakeAndModel (): string| number{
        return this._carMake.toString() + " " + this._carModel.toString()
    }
}
```
When you import it you do not need the curly braces, because it is implicit that this is exactly the same name of the file you have exported. If you do not have the curly braces you can also change he import

```
import Car from <'filepath'>
<!-- import CarMakesAndModels from <'filepath'> -->
<!-- let car = new CarMakesAndModels () -->
let car = new Car ('BMW', 300)
console.log(car.getMakeAndModel())
```