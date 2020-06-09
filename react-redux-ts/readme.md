# React-Redux-TypeScript

This section is a project using React-Redux & TypeScript.
Level-intermediatory. Requires prior fundamentalsof JavaScript, TypeScript, Node, React & Redux.

##### Scaffolding & File Structure - building from scratch with webpack and babel
Babel documentation: [https://babeljs.io/docs/en]

* mkdir - new directory for the project ```react-redux-ts```
* initialise with node package manager - ```npm init - y``` (the -y flags skips answering the default set up)
- check you have the latest version of node [https://appdividend.com/2019/12/06/how-to-update-node-version-in-mac/]
```npm install -g n``` and ```sudo n latest``` in admin mode

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
Babel documentation[https://babeljs.io/docs/en/v7-migration]
```
{
    <!-- defines the babel plug-ins required for this app, updates compatibility of node latest version with babel@7, allows you to use async & promises-->
    {
    "presets": [
      ["@babel/preset-env", {
        "targets": { "browsers": ["last 2 chrome versions"] },
        "useBuiltIns": "usage"
      }],
      "@babel/preset-react",
      "@babel/preset-typescript"
    ]
  }
}
```
* In the webpack file set up file path (by importing file paths with require.js syntax), rules and module exports configuration - mode can be development, production, test depending on what you want to do. Target can be web or mobile, resolve allows you to import and export node modules without the file extensions.

Webpack documentation[https://webpack.js.org/concepts/#browser-compatibility] 

```
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const path = require('path')

module.exports = {
    target: 'web',
    mode: 'development',
     <!-- entry indicates which file needs to be picked up as the root file to be rendered in html -->
    entry: './src/index.tsx', 
    output: {
        filename: 'bundle.js', // the name of the bundled file
        // path of the bundled file
        path: path.resolve(__dirname, 'build')
         <!-- resolve method creates new folder in root directory and gives it the name build, can be distribution, production depending on what you want the minified code that goes into this file to be called, different from resolve key value pair below which allows you to import files without the file extensions -->
    },
    resolve: {extensions: ['.ts', '.tsx', '.js']},
    devServer: {
        <!-- gets root files -->
        contentBase: './',
        <!-- exports it to a port of your choice -->
        port: 5000
    },
    module: { 
        rules: [
            {
            test: /\.tsx?/,
            exclude: /node_modules/,
            loader: "babel-loader",
            <!-- required for compiling and use of async-await -->
            options: {
                presets: [
                    '@babel/preset-env',
                    '@babel/preset-react'
                ],
                plugins: [
                    '@babel/transform-runtime'
                ]
            }            
        }
        ]                 
    },
    plugins: [
        new HtmlWebpackPlugin({
           title: 'Async Await With React',
           template: 'index.html',
        })
    ]
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
- to uninstall [https://docs.npmjs.com/cli/uninstall]


- webpack - ```npm i webpack webpack-dev-server webpack-cli html-webpack-plugin```
- babel - ```npm i @babel/core @babel/preset-env @babel/preset-react @babel/preset-typescript babel-loader```
- react - ```npm i react react-dom @types/react @types/react-dom```
- to use async-await ```npm install @babel/plugin-transform-runtime @babel/runtime```

I used Andrew Flowers' solution [https://andrew-flower.com/blog/Async-Await-with-React]

Read more about incompability issues of async-await with node/ babel older versions and the solutions
[https://github.com/babel/babel/issues/8829]
[https://blog.cloudboost.io/using-async-await-with-react-b807f9d7b64a]
[https://medium.com/@binyamin/enabling-async-await-and-generator-functions-in-babel-node-and-express-71e941b183e2]
[https://dev.to/codeprototype/modernize-your-reactjs-application-with-asyncawait-in-2018-1l9j]
[https://gist.github.com/thejmazz/067295d9fb8b22c77be0]
[https://www.smashingmagazine.com/2020/05/typescript-modern-react-projects-webpack-babel/]

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