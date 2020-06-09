# React-Redux-TypeScript

This section is a project using React-Redux & TypeScript
Level-intermediatory. Requires prior fundamentalsof JavaScript, TypeScript, Node, React & Redux.

##### Scaffolding & File Structure - building from scratch with webpack and babel

* mkdir - new directory for the project ```react-redux-ts```
* initialise with node package manager - ```npm init - y``` (the -y flags skips answering the default set up)
check your package json file has been set up
* cd into the directory / touch - create root file & config files for transpiling files into js  ```index.html webpack.config.js .babelrc```
* mkdir - ```src``` - base file that is used to render apps cd into directory and create file 
* touch - ```index.tsx``` - the root file of the app that needs to be transpiled by webpack, webpack will get the data from this file and react will also use this file for rendering the app into the html root file
* set up root file with HTML boiler-plate and create a root-element add the scripts that compile project files into vanilla JavaScript.

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>React-Redux-TypeScript</title>
</head>
<body>
<!-- these are the files that pick up the src file root files and transpile them back to vanilla js -->
    <div id="app-root"></div>
    <script src="bundle.js"></script>
</body>
</html>
```

* set up config files - babel & webpack. In the .babelrc file create the json presets
```
{
    <!-- defines the babel plug-ins required for this app -->
    "presets": ["@babel/env", "@babel/react", "@babel/typescript"]
}
```
* In the webpack file set up file path (by importing file paths with require.js syntax), rules and module exports configuration - mode can be development, production, test depending on what you want to do. Target can be web or mobile, resolve allows you to import and export node modules without the file extensions. 

```
const path = require('path')
const rules = [
    {
    test: /\.tsx?/,
    exclude: /node_modules/,
    loader: 'babel-loader'
}
]
module.exports = {
    target: 'web',
    mode: 'development',
    <!-- entry indicates which file needs to be picked up as the root file to be rendered in html -->
    entry: './src/index.tsx',
    output:{
        <!-- resolve method creates new folder in root directory and gives it the name build, can be distribution, production depending on what you want the minified code that goes into this file to be called -->
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    module: {rules: rules},
    resolve: {extensions: ['.ts', '.tsx', '.js']},
    devServer: {
        <!-- gets root files -->
        contentBase: './',
        <!-- exports it to a port of your choice -->
        port: 5000
    }
} 
```

* Update package json files - scripts to run the app

```
{
  "name": "react-redux-ts",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "webpack-dev-server --open",
    "build": "webpack"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

* We are now ready to import the libraries and plugins required for the react-app

- babel - ```npm i @babel/core @babel/preset-env @babel/preset-react @babel/preset-typescript```
- webpack - ```npm i webpack webpack-dev-server webpack-cli babel-loader```
- react - ```npm i react react-dom @types/react @types/react-dom```


* Test whether the configuration has worked and renders a React component. In the ```index.tsx``` file create the React boiler place using ```rcf``` and tab to create a functional component, import the ReactDOM to render the root files as HTML. Write a jsx 'hello world'in a h1 element. Let's test the Typescript works by calling giving the function the ```JSX.Element``` type. Write a function with typescript and render it in a h2 element. 

```
import React from 'react'
import ReactDOM from 'react-dom'

export default function App(): JSX.Element {
    function getSentence (firstPart: string, lastPart: string): string {
        return `This is a ${firstPart} ${lastPart} app compiled with webpack & babel`
    }
    return (
        <div>
            <h1>Hello World</h1>
    <h2>{getSentence("react-redux","with TypeScript")}</h2>
        </div>
    )
}
<!-- declares the root file that the app needs to be rendered to and is passed to the render method -->
const root = document.getElementById('app-root')
<!-- ReactDOM render method takes 2 args the jsx element to render & the root html file to render to -->
ReactDOM.render(<App />, root)
```
* Run scripts to check if app works with ```npm run start``` the h1 & h2 jsx tags should render correctly on port 5000.

##### Rick & Morty episode picker project