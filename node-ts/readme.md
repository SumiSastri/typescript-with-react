### TypeScript with Node

##### Scaffolding & File Structure:
Global installs
node 
npm
npm install -g typescript

Mkdir for project (node-ts)
Cd into directory (node-ts)
Create a .ts file
Touch app.ts

##### Compiling:
Create a variable in the .ts file

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

#### Primitive Type examples in primitive-types.ts compiled by node into primitive-types.js
This follows Vishwas from CodeEvolution You Tube Tutorial [https://www.youtube.com/watch?v=WBPrJSw7yQA]

- String
- Number
- Boolean
- Array
- Tuple
- Enum

A note on variables. 

In Typescript you can use the key words of ES6 ```let``` and ```const``` that need to be declared at the top of a function block as they do not get hoisted, you will note that they are changed to the ```var``` key word in the typescript transpiler. The ```var``` key word is hoisted no matter where it is placed in the function scope. ```let``` and ```const``` only have block scope - defined in a code block between curly braces. ```let``` values when transpiled are reassigned to a new variable - see the .js file where ```let b``` is reassigned to ```let b_1``` in the transpiled code.

Closures and immediately invoked functions (iffy's) should use the ```let``` or ```const``` key words

#### Advanced Type examples with Object Oriented Programming in advanced-types.ts/advance-types.js
This follows Savjee from Simply Explained You Tube Tutorial[https://www.youtube.com/playlist?list=PLzvRQMJ9HDiQyjtcrtvDkeQMJIrv5ABbm]

In the advanced types compilation of ts files into js it is useful to see what is going on under the hood in the js files

- Objects - objects literals, objects with methods
- Functions, returning empty functions, params - union types, default types
- Classes - classes help in writing dry code 
    - look at the difference between boiler plate code of the objects file vs the classes file
    - classes make the code more extensible, instead of copying and pasting objects a class with a constructor can be used anywhere in the code base
- Classes are special functions, unlike functions, classes are not hoisted
- Extending Classes - class inheritance, class abstraction, lexical this and arrow functions
- More reading on the ```this``` keyword [http://unschooled.org/2012/03/understanding-javascript-this/]
- Interface Type, Rest Operator, Spread Operator