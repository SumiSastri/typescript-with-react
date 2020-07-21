# Table of Contents

[Project goals](#Project-goals)

#### Project goals

This project is one in a series of tutorials where I explore the documentation of TypeScript with JavaScript.

The learning objective of this project is to understand how to use TypeScript in projects using vanilla JavaScript, the front-end library React.js and modern React with Hooks.

There are 3 folders in this project - each section adds a level of complexity to the learning process.
[TypeScript and vanilla Js](/Users/ssbt/Documents/GitHub/Typescript-with-React/node-ts)
[TypeScript and React-ReactHooks](/Users/ssbt/Documents/GitHub/Typescript-with-React/react-redux-ts)
[TypeScript & React-ReactHooks](/Users/ssbt/Documents/GitHub/Typescript-with-React/to-do-list-ts)

Each folder has its own readme to document what I have learnt and to serve as a place to go back to and review code snippets for future use. It is my simplification of the documentation I have read, research from blogs and following some tutorials for specific areas that I found difficult to understand.

# Brief History of JavaScript

- Brenden Eich creates LiveScript for Netscape 1995
- Microsoft adopts it as JS-Script later renamed to JavaScript
- Browser wars begin - each browser developer wants their version of JavaScript
- Fragmentation of JavaScript as a result - VS8 (Chrome) Chakra(Microsoft) SpiderMonkey(Safari)
- ECMA takes over standardisation of JavaScript
- ES6 (2015-2016) some major changes - introduces classes and the lamda arrow function
- 2016-2020 continuous updates small incremental changes each year

# TypeScript overview

TypeScript, is an open-source library created by Anders Hejlsberg for Microsoft. It is a superset of JavaScript that allows static typing. It is what C++ is to C. Browsers do not compile TypeScript, so it requires a transpiler (compiler) to convert back into JavaScript. Based on the .net system and is closely related to object oriented programming languages.

Problems that TypeScript solves - as it is statically typed it reduces errors (bugs) as types are checked automatically preventing the accidental assignment of invalid values. It is easier to maintain in the long-term as it handles.

- Corrects type coercian of 2 or more different types in compile time - a type is a set of underlying values of a property
- JavaScript's dynamic typing changed to static typing, check errors in run time
- Bugs caught early in compile type not when it is too late (in runtime)
- Scope clarity of variables in functions/ methods
- Support for more types - enums, tuples
- Better structure of code base
- Transpiles ECMA-6 onwards back to js for cross-browser rendering
- Cross platform - client and server side/ across different libraries

Documentation
[https://www.typescriptlang.org/docs/handbook/basic-types.html][https://www.typescriptlang.org/docs/handbook/advanced-types.html]
[https://www.typescriptlang.org/docs/handbook/classes.html][https://www.typescriptlang.org/docs/handbook/utility-types.html]
[https://www.typescriptlang.org/docs/handbook/declaration-files/do-s-and-don-ts.html]

Libraries and type definitions [https://www.npmjs.com/~types]
eg. `@types/react` for react or the Microsoft search [https://microsoft.github.io/TypeSearch/]

It is useful to go through the documentation first and then the tutorials

TypeScript Playground is to TypeScript what JFiddle is to JavaScript [https://www.typescriptlang.org/play/]

## Project access

#### Install dependencies

npm install

#### Run app

npm run start

TypeScript Certifications
