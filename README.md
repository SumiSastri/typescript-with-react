# Typescript with React

 Documentation
 [https://www.typescriptlang.org/docs/handbook/basic-types.html]
 [https://www.typescriptlang.org/docs/handbook/advanced-types.html]

 Typescript is a superset of JavaScript. It is what C++ is to C. Browsers do not compile Typescript, so it requires a transpiler to convert back into Javascript.

There are 12 basic types this is from the basic documentation -   [https://www.typescriptlang.org/docs/handbook/basic-types.html]
String, Number, Boolean, Array, Object, Null, Undefined all all the same as JavaScript types

Null and Undefined: Often used as union types to provide variations of the possible answers ```string| null | undefined```

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
An array can be written as 
```let list: number[] = [1, 2, 3];``` in Typescript - which strictly types the array ```let list = [1,2,3]``` You can also write this in Typescript as ```let list: Array<number> = [1, 2, 3];```

Tuples allow you to outline a FIXED number of elements in an array ```let list =[ 1, 'milk']``` in TypeScript it is ```let list: [number, string]```

Enum:
Gives a name to numerical values  ``` enum List {Milk, Bread, Eggs}``` the values are zero indexed by default, so milk is 0, bread is 1 and eggs 2. These values can be changed manually ```enum List {Milk = 1, Bread = 2, Eggs = 4}``` or the start of the index can be changed ```enum List {Milk = 1, Bread, Eggs}```, then bread becomes 2 and eggs 3. You can look up the index value in an enum to check what its value is.

```
enum List {Milk = 1, Bread, Eggs}
let shoopingList: string = List[2];
console.log(shoppingList); // Displays 'Bread' as its value is 2 above
```

Awais Jamil & Richard Bray Udemy courses notes

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
