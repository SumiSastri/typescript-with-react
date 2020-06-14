# React-Redux-TypeScript

![Ricky and Morty app](/react-redux-ts/src/assets/app-screenshot.png)
**A free Udemy tutorial by Richard Oliver Bray**

This section is a project using React, React-Redux, React-Hooks & TypeScript, builds react project with webpack and babel. Uses in-line CSS and follows Richard Oliver Bray's tutorial.

Level-intermediatory. Requires prior fundamentals of JavaScript, TypeScript, Node, React & Redux.

##### Scaffolding & File Structure - building from scratch with webpack and babel

Babel documentation: [https://babeljs.io/docs/en]

- mkdir - new directory for the project `react-redux-ts`
- initialise with node package manager - `npm init - y` (the -y flags skips answering the default set up)

* check you have the latest version of node [https://appdividend.com/2019/12/06/how-to-update-node-version-in-mac/]
  `npm install -g n` and `sudo n latest` in admin mode

- check your package json file has been set up
- cd into the directory / touch - create root file & config files for transpiling files into js `index.html webpack.config.js .babelrc`
- mkdir - `src` - base file that is used to render apps cd into directory and create file
- touch - `index.tsx` - the root file of the app that needs to be transpiled by webpack, webpack will get the data from this file and react will also use this file for rendering the app into the html root file
- set up root file with HTML boiler-plate and create a root-element add the scripts that compile project files into vanilla JavaScript.
- mkdir - for CSS and cd into folder - touch - `styles.css` - adds css to the project (this did not work and I have used in-line styling)

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- use link ref if you want to connect CSS -->
    <title>React-Redux-TypeScript</title>
</head>
<body>
<!-- these are the files that pick up the src file root files and transpile them back to vanilla js -->
    <div id="app-root"></div>
    <script src="bundle.js"></script>
</body>
</html>
```

- set up config files - babel & webpack. In the .babelrc file create the json presets
  Babel documentation[https://babeljs.io/docs/en/v7-migration] - this is important to set-up to run the `async-await` method.

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

- In the webpack file set up file path (by importing file paths with require.js syntax), rules and module exports configuration - mode can be development, production, test depending on what you want to do. Target can be web or mobile, resolve allows you to import and export node modules without the file extensions.

Webpack documentation[https://webpack.js.org/concepts/#browser-compatibility]
Adding css to webpack config [https://dev.to/iamismile/how-to-setup-webpack-and-babel-for-react-59ph][https://www.jackfranklin.co.uk/blog/css-modules-webpack-react/]
[https://medium.com/@philoskepsi/how-to-build-a-react-app-with-webpack-4-and-babel-7-e69314efc5db]

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
        },
             <!-- css rules -->
            {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
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

- Update `package.json` files - scripts to run the app

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

- We are now ready to import the libraries and plugins required for the react-app

* to uninstall documentation - [https://docs.npmjs.com/cli/uninstall]in case you need to update Babel@6 to @7 or install the files in the wrong directory.

* webpack - `npm i webpack webpack-dev-server webpack-cli html-webpack-plugin`
* babel - `npm i @babel/core @babel/preset-env @babel/preset-react @babel/preset-typescript babel-loader`
* react - `npm i react react-dom @types/react @types/react-dom`
* to use async-await `npm install @babel/plugin-transform-runtime @babel/runtime`
* adding css - `npm install css-loader style-loader --save-dev`
* adding routing - `npm install @reach/router @types/reach__router`

I found Andrew Flowers' solution the simplest for how to use async-await
[https://andrew-flower.com/blog/Async-Await-with-React]
Read more about incompability issues of async-await with node/ babel older versions and the solutions
[https://github.com/babel/babel/issues/8829][https://blog.cloudboost.io/using-async-await-with-react-b807f9d7b64a]
[https://medium.com/@binyamin/enabling-async-await-and-generator-functions-in-babel-node-and-express-71e941b183e2][https://dev.to/codeprototype/modernize-your-reactjs-application-with-asyncawait-in-2018-1l9j]
[https://gist.github.com/thejmazz/067295d9fb8b22c77be0][https://www.smashingmagazine.com/2020/05/typescript-modern-react-projects-webpack-babel/]

- Test whether the configuration has worked and renders a React component. In the `index.tsx` file create the React boiler place using `rcf` and tab to create a functional component, import the ReactDOM to render the root files as HTML. Write a jsx 'hello world'in a h1 element. Let's test the Typescript works by calling giving the function the `JSX.Element` type. Write a function with typescript and render it in a h2 element. See if the CSS works - it did not for me so I aborted and used in-line CSS as the objective of this project is to use TypeScript with React & learn how React Hooks, React-Redux work with TypeScript.

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

- Run scripts to check if app works with `npm run start` the h1 & h2 jsx tags should render correctly on port 5000.

##### Rick & Morty episode picker project

**Initial Set-Up of app functionality**

- App.tsx - Create hello-world test - `use Fragment` and `useContext` hooks
- Set up store with reducers - `useReducer` hook import into App check functionality
- Fetch data using async await - `useEffect` hook - check data flows

```
useEffect(() => {
    state.episodes.length === 0 && fetchDataAction();
    // uncomment log - checks whether data is flowing from the API to the front end
    // console.log(state)
  });

  const fetchDataAction = async () => {
    const URL =
      "https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes";
    const data = await fetch(URL);
    // uncomment log - checks whether data fetched from api call
    // console.log(data);
    const dataJSON = await data.json();
     // uncomment log - checks json version of object
    // console.log(dataJSON);
    return dispatch({
      type: "FETCH_DATA",
      payload: dataJSON._embedded.episodes,
    });
  };
```

- Render data using `array.map` method
- Refactor interface types create an interface component and export them to relevant components
- Add/ remove favourite episode with onClick event using `array.filter` and`array.find` methods
- Refactor move all episodes to its own functional component
- Add lazy loading using `suspense` hook - read work around to fix bugs [https://github.com/facebook/react/issues/14603]
  This is the solution I used that worked:-

```
const EpisodeList = lazy<any>(() =>
  import('./EpisodeList').then(module => ({ default: module.EpisodeList }))
);
```

More reading about `React.lazy()` [https://blog.bitsrc.io/lazy-loading-react-components-with-react-lazy-and-suspense-f05c4cfde10c]
No real type for the method see [https://github.com/DefinitelyTyped/DefinitelyTyped/issues/30129]
Documentation also does not provide a type definition [https://reactjs.org/docs/code-splitting.html]

**Refactoring and adding new Components**

1. Refactor - EpisodeList Component - deconstruct the props to add store as below, I have added in-line styling at this stage - CSS can be done earlier with webpack/ create-react-app/ other CSS libraries. This project was focused on TypeScript and its use with React & React Hooks, therefore I did not spend much time trying to style this - it may be something to do once the app is working as a final refactor and clean up.

```
import React, { Component } from "react";
import IEpisode from "./interfaces";

export function EpisodeList(props: any): Array<JSX.Element> {
  const { episodes, toggleFave, favourites, store } = props;
  const{state, dispatch} = store

  return episodes.map((episode: IEpisode) => {
    return (
      <section style={{margin: '5px', padding: '5px', backgroundColor: "salmon" }} >
        <div
        style={{display: "flex", flexWrap:"wrap", justifyContent: "space-between", margin: '5px', padding: '5px', backgroundColor: "grey" }}
        key={episode.id}>
          <img src={episode.image.medium} style={{borderRadius: '2%', height:"35vh" }}/>
          <h5 style={{color: "white", fontSize: '20px', fontFamily: 'Caveat' }}>{episode.name}</h5>
          <button style={{backgroundColor: "iceBlue", color: "navyBlue", fontSize: '16px', height: "40px", fontFamily: 'Caveat', width: "30vh", margin: '5px' }}
          type="button" onClick={() => toggleFave(state, dispatch,episode)}>
            {favourites.find(
              (favourite: IEpisode) => favourite.id === episode.id
            )
              ? "Fave - Click to Unfave"
              : "Unfaved - Click to make Fave"}
          </button>
          <h6 style= {{color: "white", fontSize: '15px', fontFamily: 'Caveat' }}>
            Season{episode.season} Episode{episode.number}
            <hr></hr>
            {episode.summary}
          </h6>
        </div>
      </section>
    );
  });
}

```

2. Refactor - Create Actions Component exporting the actions payloads - It will be needed by both HomePage and MyFavourites pages by moving the actions' functions out of `app.tsx` into its own component

```
import { IEpisode, IAction, IState } from "./interfaces";

export const fetchDataAction = async (dispatch: any) => {
    const URL =
      "https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes";
    const data = await fetch(URL);
    const dataJSON = await data.json();
    return dispatch({
      type: "FETCH_DATA",
      payload: dataJSON._embedded.episodes,
    });
  };

  export const toggleFave = (state:IState, dispatch:any, episode: IEpisode | any): IAction => {
    const faveEpisode = state.favourites.includes(episode);
    let dispatchObj = {
      type: "ADD_FAVE",
      payload: episode,
    };
    if (faveEpisode) {
      const unFaveEpisode = state.favourites.filter(
        (favourite: IEpisode) => favourite.id !== episode.id
      );
      dispatchObj = {
        type: "UNDO_FAVE",
        payload: unFaveEpisode,
      };
    }
    return dispatch(dispatchObj);
  };
```

3. Refactor - create HomePage functional Component - move files from `app.tsx` to HomePage and import the actions from the `Actions.tsx` component

```
import React, {useEffect, useContext, lazy, Suspense } from "react";

import { Store } from "./store";
import {IEpisodeProps } from "./interfaces";
import {fetchDataAction, toggleFave} from './Actions'


const EpisodeList = lazy<any>(() =>
  import("./EpisodeList").then((module) => ({ default: module.EpisodeList }))
);
export default function HomePage() {
  const { state, dispatch } = useContext(Store);

  useEffect(() => {
    state.episodes.length === 0 && fetchDataAction(dispatch);
  });

  const props: IEpisodeProps = {
    episodes: state.episodes,
    <!-- once the favourites page has been created this prop needs to be added to the home page and the interface type -->
    store: {state, dispatch},
    toggleFave,
    favourites: state.favourites,
  };

  return (
    <section
      style={{
        margin: "5px",
        padding: "5px",
        display: "flex",
        backgroundColor: "blanchedAlmond",
      }}
    >
      <Suspense
        fallback={<div>IMAGES LOADING...</div>}
      >
        <section>
          <EpisodeList {...props} />
        </section>
      </Suspense>
    </section>
  );
}
```

3. Refactor - Create MyFavourites functional Component - the props for this component are slightly different and the interfaces will need to be modified

```
import React, {useContext, Suspense, lazy} from 'react'

import {Store} from './store'
import {toggleFave} from './Actions'
import {IEpisodeProps} from './interfaces'

const EpisodeList = lazy<any>(() =>
  import("./EpisodeList").then((module) => ({ default: module.EpisodeList }))
);
export default function MyFavourites(): JSX.Element {
    const {state, dispatch} = useContext(Store)
   const props: IEpisodeProps ={
       episodes: state.favourites,
       <!-- this prop has to be added to the home page component for the faves to be added to this page -->
       store: {state, dispatch},
       toggleFave,
       favourites: state.favourites
   }
   return (
    <section
      style={{
        margin: "5px",
        padding: "5px",
        display: "flex",
        backgroundColor: "blanchedAlmond",
      }}
    >
      <Suspense
        fallback={<div>IMAGES LOADING...</div>}
      >
        <section>
          <EpisodeList {...props} />
        </section>
      </Suspense>
    </section>
  );
}
```

4. Refactor - Interfaces Component - there should be only exports not export defaults, remove any unwanted key-value pairs from IEpisode, add optionals if required, standardise types of episodes and favourites as array types.

```
export interface IEpisode {
    id: number
    name: string
    image:{medium:string, original: string}
    number: number
    season: number
    summary?: string
  }
  export interface IAction {
    type: string
    payload: any
}
export interface IState{
    episodes: Array<IEpisode>
    favourites: Array<IEpisode>
}
export interface IEpisodeProps{
  episodes: Array<IEpisode>
  <!-- this will have to be changed as it is a duplication of name-space-->
  <!-- state: {state:IState, dispatch: any} -->
  store: {state:IState, dispatch: any}
  toggleFave: (state: IState, dispatch: any, episode: IEpisode| any ) => {IAction}
  favourites: Array<IEpisode>
}
```

5. Refactor - Store Component - clean up types - note the change in types added for the export of the `StoreProvider` method, remove the reducer from store and move to it's own component

```
import React, { useReducer, createContext } from "react";

import { IState } from "./interfaces";
import { reducer } from "./reducers";

const initialState: IState = {
  episodes: [],
  favourites: [],
};
export const Store = createContext<IState | any>(initialState);

export function StoreProvider({
  children,
}: JSX.ElementChildrenAttribute): JSX.Element {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>
  );
}
```

6. Refactor - Reducer to own component and import back into store

```
import { IAction, IState } from "./interfaces";

export function reducer(state: IState, action: IAction) {
  switch (action.type) {
    case "FETCH_DATA":
      return { ...state, episodes: action.payload };
    case "ADD_FAVE":
      return { ...state, favourites: [...state.favourites, action.payload] };
    case "UNDO_FAVE":
      return { ...state, favourites: action.payload };
    default:
      return state;
  }
}
```

**Adding Routing, Page-Links**

- Set up router and paths: Your `index.tsx` file should look like this - add the types for the router or else the app will break/ not compile as the root file is a TypeScript root file.

```
import React from "react";
import ReactDOM from "react-dom";
import { StoreProvider } from "./store";
<!-- Reach RouteComponentProps helps to render props of components -->
import {Router, RouteComponentProps} from '@reach/router'

import App from "./app";
import HomePage from './homePage'
import MyFavourites from './myFavourites'

const root = document.getElementById("app-root");
<!-- A variable to render the props as this feature is not supported yet by React - props in this case are the paths of the components App, HomePage and MyFavourites Page -->
const RouterPage = (props: {pageComponent:JSX.Element} & RouteComponentProps) => props
pageComponent
ReactDOM.render(
  <StoreProvider>
    <Router>
    <App path='/'>
    <!-- here we use the variable we have created which stores our anonymous lamda function with the param of a pageComponent which takes a jsx element and the routing they are self closing tags-->
        <RouterPage pageComponent={<HomePage />} path="/" />
        <RouterPage pageComponent={<MyFavourites />} path="/my-favourites" />
    </App>
    </Router>
  </StoreProvider>,
  root
);
```

- Create a nav bar for the links in `app.tsx`, import the Link Component from the router and render the children of the component - RouteComponentProps.

```
import React, { Fragment, useContext } from "react";
import { Link } from "@reach/router";

import { Store } from "./store";

export default function App(props: any): JSX.Element {
  const { state } = useContext(Store);

  return (
    <Fragment>
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          borderBottom: "dashed 3px black",
          backgroundColor: "blanchedAlmond",
          fontFamily: "Caveat",
        }}
      >
        <h1>Rick & Morty episode picker</h1>
        <h4>Pick your fave show</h4>
      </header>
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "5px",
          padding: "5px",
          backgroundColor: "blanchedAlmond",
          fontFamily: "Caveat",
        }}
      >
       <Link to="/">Home</Link>
        <Link to="/my-favourites">My Favourites Currently at {state.favourites.length}</Link>
      </nav>
      {props.children}
    </Fragment>
  );
}

```

To bug fix routing the tutorial by Ryan Florence is really useful. More reading for routing Documentation for reachrouter [https://reach.tech/router] - GitHub pages [https://github.com/reach/router] - Tutorial by Ryan Florence [https://github.com/reach/router/tree/master/website/src/markdown/tutorial]

The app now should work with favourites added to the MyFavourites Page and navigation back from the MyFavourites page to the home page.

**Final Clean up and Refactoring**

Changing folder structure and cleaning up imports due to changed structure

--src (for root files `app.tsx` and `index.tsx`)

--actions-and-reducers (for `actions.tsx` and `reducers.tsx`)

--components (for app pages `episodeList.tsx`,`homePage`,`myFavourites`)

--interfaces(for custom interface types`interfaces.tsx`)

--store (separates out reducers from store and imports them back into`store.tsx`)
