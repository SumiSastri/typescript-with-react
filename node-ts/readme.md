### TypeScript with Node

This follows Vishwas from Code Evolutions You Tube Tutorial [https://www.youtube.com/watch?v=WBPrJSw7yQA]

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

<tsc app.ts> - this runs the tsc file and compiles it to javascript
<node app.js> - The terminal console should print your message as the node environment is set up

However as this is a typescript-node-javascript project, you will get an error on the .ts file
The .ts file is a script file and shares global scope and throws the error
Node modules have their own scope and need common.js exports to export the module which is an empty function ```{}```

tsc app.ts again and you will see the node environment in work - the export is imported into the .js file

```
"use strict";
exports.__esModule = true;
var message = "hellow";
console.log(message);
```

Now that you have set up the files to compile correctly you can watch changes live in the node environment
<tsc app.ts --watch> - This updates in console all the changes in the .ts files as each is updated
<command k> clears the terminal in the same directory

#### Primitive Type examples in app.ts compiled by node into app.js
- String
- Number
- Boolean
- Array
- Tuple
- Enum
