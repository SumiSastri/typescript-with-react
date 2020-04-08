# Typescript overview
Typescript, is an open-source library created by Microsoft. It is a superset of JavaScript that allows static typing. It is what C++ is to C. Browsers do not compile Typescript, so it requires a transpiler (compiler) to convert back into JavaScript. Based on the dotnet system and is closely related to object oriented programming languages.

Problems that TypeScript solves - as it is statically typed it reduces errors (bugs) as types are checked automatically preventing the accidental assignment of invalid values. It is easier to maintain in the long-term as it handles.

- Bad type coercion
- Bugs in run time caught in compile type
- Dynamic typing changed to static typing
- Equality and type juggling
- Scope clarity
- Works on classes, object oriented programming concepts like inheritance
- Support for more types - enums, tuples etc.
- Structuring large code base difficult to maintain purely in JS due to these shortcomings
- Compatible with node, react, angular and other libraries
- Transpiles ECMA-6 onwards back to js for cross-browser rendering

Documentation
 [https://www.typescriptlang.org/docs/handbook/basic-types.html]
 [https://www.typescriptlang.org/docs/handbook/advanced-types.html]
 [https://www.typescriptlang.org/docs/handbook/classes.html]
 [https://www.typescriptlang.org/docs/handbook/utility-types.html]
 [https://www.typescriptlang.org/docs/handbook/declaration-files/do-s-and-don-ts.html]

Libraries and type definitions [https://www.npmjs.com/~types]
eg. ```@types/react``` for react or the Microsoft search [https://microsoft.github.io/TypeSearch/]

Tutorials: 
Karthik, Daniel Stern, Awais Jamil & Richard Bray (Udemy - free courses)
Moshe, Vishwas(CodeEvoluiton) YouTube
[https://www.youtube.com/watch?v=n3zrCxB8sj8&list=PLC3y8-rFHvwhI0V5mE9Vu6Nm-nap8EcjV] 

It is useful to go through the documentation first and then the tutorials - cheat sheet from documentation

# Brief History
- Brenden Eich creates LiveScript for Netscape 1995
- Microsoft adopts it as JS-Script later renamed to JavaScript
- Browser wars begin - each browser developer wants their version of JavaScript
- Fragmentation of JavaScript as a result - VS8 (Chrome) Chakra(Microsoft) SpiderMonkey(Safari)
- ECMA takes over standardisation of JavaScript 
- ES6 (2015-2016) some major changes - introduces classes and the lamda arrow function
- 2016-2020 continuous updates small incremental changes each year

### Section 1: Basic Types
Documentation: [https://www.typescriptlang.org/docs/handbook/basic-types.html]

* Type annotation
-  declare a variable, gve the variable name a type identifier and assign it a value - ```let/const name: type identifier = 'value' ```

* A note on variables

Variable declaration - ES6 ```let``` and ```const``` key words can be used they will be transpiled back into ```var``` by the typescript compiler. 

#### Primitive types

- String ```let name: string = 'Jhanavi' ```
- Number ```let age: number = 5```
- Boolean ```let isDone: boolean = false;```
- Template Literal - Allows embedded expressions 

```
let fullName: string = `Jhanavi Basappa`;
let age: number = 16;
let sentence: string = `Hello, my name is ${ fullName }. I'll be ${ age + 1 } years old next month.`;
```
- Numeric Literal
Defines specifically all the numbers exactly expected from the function

```
function rollDice(): 1 | 2 | 3 | 4 | 5 | 6 {
    // ...
}
```
- Array - can be written in 2 ways

  -  ```let list: Array<number> = [1, 2, 3];```
   OR
  -  ```let listNames: string[] = ['Ravi', 'Ravinder', 'Ravindernath'];```
  -  ```let checkBig: boolean[] = [true, false, false];```
  -  ```let listNumbers: number[] = [1, 2, 3];``` 

* Additional TypeScript types

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
- The differences between Any, Null, Undefined, Unknown, Never & Void

* Any: Allows dynamic typing and is not strictly typed to any of the defined TypeScript types, allows JavaScript engines to decide what the implicit type is, it allows you to opt out of using TypeScript, runs normal compile time JS checks

```
let notSure: any = "not sure of the result, so it could be anything"

```

* Null:  Null describes a variable that has no value as compared with a value of zero, zero is a value. Therefore null describes the absence of a value.

* Undefined: Allows the possibility for no definition of the type

Often used as union types to provide variations of the possible answers ```string| null | undefined``` 

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

* Unknown:  

### Section 2 : Advanced Types
[https://www.typescriptlang.org/docs/handbook/advanced-types.html]

Advanced TypeScript - When you need to assign multiple types to a variable, you will need advanced typescript notation.
 
 The advanced types
 - Objects
 - Functions
 - Classes
 - Class Inheritance
 - Lexical This 

#### Objects 

Each name-value pair is defined with a type and assigned to a variable

```
const teacherName {
        id: number,
        name: string,
        surname: string
}
```
 Optional key value pairs can be notated with the question mark, while the readonly keyword does not allow you to change the key-value pair

```
const teacherName {
readonly id: number,
        name?: string,
        surname: string
}

let personTeacher: PersonType = {id: 1, name: 'Mr Guru'}
```
#### Functions
[https://www.typescriptlang.org/docs/handbook/functions.html]

* Function declaration - function name declared with the function keyword
  Typescript function declaration has types assigned to every param 
```
 function createStudentName(firstName: string, lastName: string){
     return firstName + " "+ lastName
 }
 ```
 * Default types - adds default to lastName if no value provided
 
 ```
  function createStudentName(firstName: string, lastName: string = "Doe"){
     return firstName + " "+ lastName
 }
 ```
* Optional types - notated with question markm at end of all params
  
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

* Lamda or Arrow Functions - function assigned to a variable, function keyword removed, fat arrow is an implict return
```
let getTeacherNames = (firstName:string, lastName: string) => {
    return `{firstName} {lastName}` 
}
console.log ((getTeacherNames('Arthur', 'Chamraj'))
```

### Section 3: Classes, Constructors & Inheritance
[https://www.youtube.com/watch?v=n3zrCxB8sj8&list=PLC3y8-rFHvwhI0V5mE9Vu6Nm-nap8EcjV]

Classes are special types of functions created in ES6 to replace prototypal inheritance. While functions are hoisted, classes can not be called before they are declared. The class function is declared not with the function key word but the class keyword. The block of code in the class function (or the class body) can only contain methods not properties. There are 3 types of methods
  - the constructor method - creates and initalises an object, only one allowed in every class
  - prototype methods - that can be modified
  - static methods - that can not be modified
  - classes can be extended with a super method declared after the constructor method
  - class abstraction

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
### Intersection Types
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
### Section 4: Modules, index.d.ts

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