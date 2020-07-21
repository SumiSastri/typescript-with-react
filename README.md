# Table of Contents

1. [Project goals](#Project-goals)
2. [Folder structure](#Folder-structure)
3. [Project access](#Project-access)
4. [A brief history of JavaScript](#Brief-History-of-JavaScript)
   [TypeScript Overview](#TypeScript-overview)
   [Resources](#Resources)

#### Project goals

This project is one in a series of tutorials following documentation. In this project, I explore the documentation of TypeScript with JavaScript, React & React-Redux.

#### Folder structure

There are 3 folders in this project - each section adds a level of complexity to the learning process.

1. Typescript & Vanilla Js
   [TypeScript and vanilla Js](https://github.com/SumiSastri/Typescript-with-React/tree/master/node-ts)

2. [TypeScript & React](https://github.com/SumiSastri/Typescript-with-React/tree/master/to-do-list-ts)

3. [TypeScript & React-ReactRedux](https://github.com/SumiSastri/Typescript-with-React/tree/master/react-redux-ts)

Each folder has its own readme to document what I have learnt and to serve as a place to go back to and review code snippets for future use. It is my simplification of the documentation I have read, research from blogs and following some tutorials for specific areas that I found difficult to understand.

#### Project access

**Install dependencies**

npm install

**Run React apps**

npm run start

**Run logs with vanilla JS files**

node filepath/filename

#### Brief History of JavaScript

- Brenden Eich creates LiveScript for Netscape 1995
- Microsoft adopts it as JS-Script later renamed to JavaScript
- Browser wars begin - each browser developer wants their version of JavaScript
- Fragmentation of JavaScript as a result - VS8 (Chrome) Chakra(Microsoft) SpiderMonkey(Safari)
- ECMA takes over standardisation of JavaScript
- ES6 (2015-2016) some major changes - introduces classes and the lamda arrow function
- 2016-2020 continuous updates small incremental changes each year

#### TypeScript overview

TypeScript, is an open-source library created by Anders Hejlsberg for Microsoft. It is a superset of JavaScript that allows static typing. It is what C++ is to C. Browsers do not compile TypeScript, so it requires a transpiler (compiler) to convert back into JavaScript. Based on the .net system and is closely related to object oriented programming languages.

Problems that TypeScript solves - as it is statically typed it reduces errors (bugs) as types are checked automatically preventing the accidental assignment of invalid values. It is easier to maintain in the long-term as it:-

- Corrects type coercian of 2 or more different types in compile time - a type is a set of underlying values of a property
- JavaScript's dynamic typing changed to static typing, check errors in run time
- Bugs caught early in compile type not when it is too late (in runtime)
- Scope clarity of variables in functions/ methods
- Support for more types - enums, tuples
- Better structure of code base
- Transpiles ECMA-6 onwards back to js for cross-browser rendering
- Cross platform - client and server side/ across different libraries

#### RESOURCES

Documentation:
[https://www.typescriptlang.org/docs/handbook/basic-types.html][https://www.typescriptlang.org/docs/handbook/advanced-types.html]
[https://www.typescriptlang.org/docs/handbook/classes.html][https://www.typescriptlang.org/docs/handbook/utility-types.html]
[https://www.typescriptlang.org/docs/handbook/declaration-files/do-s-and-don-ts.html]

Libraries and type definitions [https://www.npmjs.com/~types]
eg. `@types/react` for react or the Microsoft search [https://microsoft.github.io/TypeSearch/]

TypeScript Playground is to TypeScript what JFiddle is to JavaScript [https://www.typescriptlang.org/play/]
