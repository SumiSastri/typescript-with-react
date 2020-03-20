# Typescript with React

 Documentation
 [https://www.typescriptlang.org/docs/handbook/basic-types.html]
 [https://www.typescriptlang.org/docs/handbook/advanced-types.html]

 Tutorials: Awais Jamil & Richard Bray Udemy courses notes

 Typescript is a superset of JavaScript. It is what C++ is to C. Browsers do not compile Typescript, so it requires a transpiler to convert back into Javascript.

### Section 1: Basic Types

There are 12 basic types this is from the basic documentation -   [https://www.typescriptlang.org/docs/handbook/basic-types.html]
String, Number, Boolean, Array, Object, Null, Undefined all all the same as JavaScript types

Null and Undefined: Often used as union types to provide variations of the possible answers ```string| null | undefined``` this is an advanced type - check second section

Any: Allows dynamic typing and is not strictly typed to any of the defined TypeScript types

Never: Is used to indicate an error message, if you want something to never happen you use this type definition
```
function error(message: string): never {
    throw new Error(message);
}
```
Void: Can also be used as an error message - commonly used for functions that do not return any value

```
function warnUser(): void {
    console.log("This is my warning message");
}
```

Tuple:
It is a defined number of elements in an array - this is strictly fixed in terms of the number of elements, TypeScript allows you also to sctrictly define the type of the elements in the tuple.

```let list: number[] = [1, 2, 3];``` in Typescript - which strictly types the JavaScript array ```let list = [1,2,3]``` You can also write this in Typescript as ```let list: Array<number> = [1, 2, 3];```

Tuples allow you to outline a FIXED number of elements in an array ```let list =[ 1, 'milk']``` in TypeScript it is ```let list: [number, string]```

Enum:
Gives a readable name to numerical values  ``` enum List {Milk, Bread, Eggs}``` the values are zero indexed by default, so milk is 0, bread is 1 and eggs 2. These values can be changed manually ```enum List {Milk = 1, Bread = 2, Eggs = 4}``` or the start of the index can be changed ```enum List {Milk = 1, Bread, Eggs}```, then bread becomes 2 and eggs 3. You can look up the index value in an enum to check what its value is.

```
enum List {Milk = 1, Bread, Eggs}
let shoopingList: string = List[2];
console.log(shoppingList); // Displays 'Bread' as its value is 2 above
```

Problems that TypeScript solves - as it is statically typed it reduces errors as types are checked automatically preventing the accidental assignment of invalid values. 
- Prototypal inheritance
- Equality and type juggling
- Scope
- Lack of strictly typed types

Type annotation
``` let identifier: annotation = value;``` 
Primitive types 
```let name: string = 'Jhanavi' ```
```let age: number = 5```
```let big: boolean = true```

```let list: Array<number> = [1, 2, 3];```
```let listNumbers: number[] = [1, 2, 3];``` 
```let listNames: string[] = ['Ravi', 'Ravinder', 'Ravindernath'];```
```let checkBig: boolean[] = [true, false, false];```

Enum: The state of the door as open is indexed at 0 with closed and ajar at 1 and 2. Typescript does not recognise console logs as these are JavaScript commands - note the case in a enum declarations

```
enum DoorStats{
    Open,
    Closed,
    Ajar
}
```
### Section 2 : Advanced Types

Advanced TypeScript - When you need to assign multiple types to a variable, you will need advanced typescript notation.
 [https://www.typescriptlang.org/docs/handbook/advanced-types.html]

 The advanced types
 - Function declaration with Typescript
```
 function createStudentName(firstName: string, lastName: string){
     return firstName + " "+ lastName
 }
 ```
 Adding a default - this will give you the surname Doe if nothing is filled in
 ```
  function createStudentName(firstName: string, lastName: "Doe"){
     return firstName + " "+ lastName
 }
 ```

 - Union Types - two or more types with the pipe symbol
 ```let numberType: string| number```
 
 - Intersections - two or more types with the amperestand, a good example of this is with the spread operator. Typescript expects you to define each of the items in the spread
 
``` {...studentName} is changed to 
const studentName: { 
className?: string | undefined; 
id?: string | undefined; 
disabled?: boolean | undefined; 
} ```

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
        name?: string,
        surname: string
}
```
In a function

```
function createName (firstName: string, ...otherNames: string[]){
    return firstName + " " + otherNames..join(" ")
}
```

 - Type Guards - Checks types within the scope of the function argument 

 - Type Aliases - a convenient naming convention for Union Types

 - Null and Undefined

- Interface Type - defined by the key word interface, the variable is in Pascal case, the object instance is assigned to the interface and strongly typed. Whenever the object is used then both the id and the name are required when invoked in compile time.

```
interface PersonTeacher {
    id: number,
    name: string
}

let personTeacher: PersonTyoe = {id: 1, name: 'Mr Guru'}
```

Optional key value pairs can be notated with the question mark, while the readonly keyword does not allow you to change the key-value pair

```
interface PersonTeacher {
readonly id: number,
        name?: string,
        surname: string
}

let personTeacher: PersonTyoe = {id: 1, name: 'Mr Guru'}
```
