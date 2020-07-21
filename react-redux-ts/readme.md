# React-Redux-TypeScript

This is the last section which adds another layer of complexity with React, React-Hooks & Redux with an external API. I also wanted to revise how to scaffold the project with webpack and babel as I have been using the create-react-app for several side projects.

#### Table of Contents

![Ricky and Morty app](/react-redux-ts/src/assets/app-screenshot.png =100x100)

1. (#Scaffolding-with-babel-and-webpack)

##### Scaffolding with babel and webpack

Babel documentation: [https://babeljs.io/docs/en]

- mkdir - new directory for the project `react-redux-ts`
- initialise with node package manager - `npm init - y` (the -y flags skips answering the default set up)
- check you have the latest version of node [https://appdividend.com/2019/12/06/how-to-update-node-version-in-mac/] then install node in the project - `npm install -g n` and `sudo n latest` in admin mode
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

- to uninstall documentation - [https://docs.npmjs.com/cli/uninstall]in case you need to update Babel@6 to @7 or install the files in the wrong directory.

- webpack - `npm i webpack webpack-dev-server webpack-cli html-webpack-plugin`
- babel - `npm i @babel/core @babel/preset-env @babel/preset-react @babel/preset-typescript babel-loader`
- react - `npm i react react-dom @types/react @types/react-dom`
- to use async-await `npm install @babel/plugin-transform-runtime @babel/runtime`
- adding css - `npm install css-loader style-loader --save-dev`
- adding routing - `npm install @reach/router @types/reach__router`

**Note**
Challenges - I was unable to configure CSS with webpack and babel so used in-line CSS and followed Richard Oliver Bray's tutorial to embedd the knowledge from TypeScript documentation.

While I followed the tutorial to some extent, I found the folder structure and some of the code could be refactored so I have changed some of the code and the file structure. The tutorial also uses an older version of Babel (updated project from Babel@6 to @7 ), so I had to update packages and modify some of the code as it was not backwards compatible.

I have mainly outlined how to add TypeScript to code rather than how React-Redux works, there is a brief overview to put the project into context at the end of the project refactoring section.

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

##### React-Hooks

React Hooks was introduced in React version 16.8 and upwards and allows you to use state and other React features without writing a class. You will now find running `create-react-app` compiles and has no stateful components in the main `app.js`. It is backwards compatible with previous versions with no breaking changes.

Documentation [https://reactjs.org/docs/hooks-intro.html] There is a 1 hour video that may not be worth watching at this stage. A lot of the video is summarized in the documentation. Worth watching it a few times after you have used Hooks in a project.

Hooks is an API to props, state, context, refs and lifecycle hooks. It makes the app faster. You can use hooks selectively experimenting with a few components at a time, there is no need to rewrite legacy code.

Challenges with React that Hooks solve:

- Inability to use state in another component, hooks allows for a better primitive sharing of state between compoinents
- Life-cycle methods difficult to maintain between components, hooks allows you to break down lifecycle methods into smaller funcitons and reuse them
- Class-based components rely on prototype inheritance, this can be difficult to learn and use due to call, bind methods of lexical `this` in state and props. Hooks simplifies the use case of class based components.

Using State as a hook sets state to an array. `const [value, setValue] = useState ('')` where state is defined as an empty string.

This is a deconstruction of the array where a value is set, `setValue` as you will see in the debugger is a function.

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

![Ricky and Morty app](/react-redux-ts/src/assets/data-in-favourites-console.png =100X100)

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

### Putting Redux into context and why I refactored the folder structure.

##### What is Redux

Redux is a way to control data-flow in an app, it was created by Dan Abramov and Andrew Clark 2015 and is influenced by ELM & React-flux.

More in this article https://medium.com/@jtbennett/standard-actions-in-redux-c6a415c8aea4

Data flows are uni-direction from a React component to the Redux store via an action (or payload) the action is dispatched to the store.

The store holds the initial state which is sent to the reducer as a state tree. The reducer duplicates the state tree and updates the state tree with the changes specified by the actions dispatched. The duplicate and updated state-tree incorporating the actions from the actions object is sent back to the React component. The original state tree remains pristine and is never changed.

The React component subscribes to the changes from the Store with listeners. The updated state tree is decoded and the Component re-renders.

##### Benefits of Redux

Redux is a load package manager that saves a lot of boiler plate code
There is only one store for data (state) of the form in the redux store
Data flows are predictable and stable as they are unidirectional (from parent to child)
They follow the same lifecycle method in a predictable pattern
It solves the problem in React where data can only flow from the parent to the child, therefore can not flow from the child to parent, grandparent or sibling components
Redux scales an app when there is a need to change state in multiple places.
Redux is the next step in the app data-management complexity curve Browser-based data in DOM / react-js (data in state in components/ virtual DOM) / react-redux (only one set of state in store, no data in components)
Data Flows in Redux
Data flows from components via actions to store (with Redux-forms through higher order components (HOC’s) From store via dispatch actions back to the React component Component subscribes and unsubscribes to changes (higher order components have specialised methods to handle API payloads) Component renders

##### 5 Steps to Set Up

##### Step 1: Set-Up Store

Store is an object
It holds state, which is immutable in one place, preventing “ghost” instances of data (state) in the app
It is the one source of truth (stable data and eliminates ‘lurking’ copies of state in the app)
It has a base dispatching function that synchronously sends the action object, along with the state tree to the reducer function
Components send information to the store via actions
Redux forms need additional set up to work with store through some specialised methods and higher order components (HOC’s). The reduxform() method takes the form configuration object and returns a new function that wraps the changes coming in specifically from form actions
There are three states in the store:-
Pristine (default state)
Touched
Error - returns rejected props based on custom functions and the conditions written into those functions
Map functions are used to transport data as they create a duplicate copy of the information without transforming the original information

##### Step 2: Set-Up Action Payloads

Actions are objects that represent the intention to change state
Actions are the only way to get data from components into the store
Actions always have a type - it is recommended that it type is a string constant as strings can be serialised
With forms (and their higher order components) the form type is the <Field> type
Action payloads represent the data related to the action
Actions represent the value parameter passed into the reducer method, store is the accumulator
Actions are the values passed to the reducer method via the store, along with the the state-object which is the state-tree in the store

##### Step 3: Set-Up Reducers

Reducers or the reducing function reduce the collection of values of the actions to one action
It is a use case for the higher order function `reduce(fold)/ array.reduce()` method where multiple values are passed with the view to getting a single new value without changing the state of the original data passed in Several reducers can be combined into a single root reducer with the combineReducers() method Under the hood, the reducer mthod has an accumulator and a value and a call back function `reducer(accumulator, values){}`` the accumulator is the state tree, values are the actions
With forms the formReducer() method is used, it is the specialised reducer that gets its information from actions related to higher order components that send the form payloads to the store.
The combineReducers(){} method for the root reducer, calls all child reducers and gathers their result into one function, keys of the action correspond to the keys of the passed reducer function
State is changed by reducers (pure functions with no side-effects) takes (current) state (also known as modified or touched, pristine state is the original state tree that never gets modified, only duplicated)
Once the pristine state has been duplicated, it is duplicated or "touched" and modified by a series of switch statements to execute the actions payloads sent to the store. The switch statemnt makes sure that both the type and the arguments on either side of the conditional operator are absolutely true (both in type and in from) and then returns the new state tree to the component requesting (subscribing for) the update
Some general rules for reducer functions: -

##### Reducer changes state via pure functions

The functions written in a reducer determines the changes needed or how state can be mutated - usually done with conditionals (switch)
If no change is needed the previous state is returned to the component and no updates are made
Root reducer combines all the changes required from multiple reducer functions
Pure functions means no api-calls, routing transitions returned in the reducers
Functions with dependencies like Math/ date functions (math.random/date.now) can not be passed

##### Step 4: Set-Up Subscribe/ Unsubscribe

The components that need to be aware of state subscribe to the store

components are set up with listeners to subscribe to these payload changes via the subscribe(listener) method
they unsubscribe by switching the listener off
Components listen for changes and switch from subscribe (listening to changes and performing the render function according to these changes) and unsubscribing when the changes have been executed

With forms, higher order components (HOCs) connect the form components to the store object. Form components have several event listeners, the Redux form method looks at all of these event listeners and ensures that the higher order components are set up to register listeners of events and unregisters these listeners in the Store.

This is specifically important for the handleSubmit (onSubmit) event handler. On keyboard, mouse and other changes are also important to track form engagement via user experience events.

This higher order component, is exported at the bottom of the form - export default reduxForm({})

A little more about the special case of the event handler onSubmit
Submitting all a forms information (data) has a chaining method to handle the submission of the information, spotting errors in the submission and catching these errors. Submission is with the values described by the user. OnSubmit(values) are passed as a JSON object. They need custom functions to handle both state (the values or data submitted) and validation (that the values and data submitted are correct). The error code block is a custom block that returns rejected props based on certain conditions and on

- .then()
- .throw new Submission Error({})
- .catch()

  ##### Step 5 : Set-Up Dispatch

  The dispatch function is the only way to trigger a change in state. The function when run - either sends the action and state tree data to the reducer to be transformed.

The dispatch method can also call the reducer function

When it calls the reducer function, it

notifies component listeners to the “next” change in the state tree
rejects the props with errors and dispatches error messages
maps the “next” change in the state tree to the component
When it dispatches actions and state to the reducer, there are custom functions that are written in Middleware (like Thunk) and passed to the base-dispatch function. Custom dispatch function accepts sync or async actions via middleware. Middleware wraps the base dispatch function and can transform, delay, ignore, the payload, and pass the information down the middleware queue of data. Middleware will eventually dispatch a plain object actions using the dispatch method.

The base dispatch function always synchronously sends actions to the stores reducers along with the state tree to calculate the new state, actions are plain objects ready to be consumed by the reducer

Once the store receives the information from actions and converts these actions that update state the new state needs to be dispatched back to the components via the dispatch method.

The dispatch method therefore takes the information from the reducer and dispatches it back to components.

The store receives the map methods and via the dispatch(action) method converts the action payload to the dispatch payload

Set up Dispatch changes to the components that have subscribed to the changes store.dispatch(action) function, the `mapDispatchToProps(dispatch)` sends user data like admin fields, how toggles change, error handling to the component.

##### How does Redux-React render components and pages?

These dispatch functions are connected via the {connect} higher order component import to the counter component and exported back to the store and the Provider component. Provider wraps the Redux HOC into the Redux library framework.

Writing the render functions wrapped in the Provider tag

Displays data from stateful components via props to stateless components

The stateless components are routed to Index.js, which registers the ReactDOM.render() method which registers the react virtual DOM

Redux is a wrapper in the React library via the Provider HOC, so it is passed as a prop of the react main.js (or app.js) component

If any change is required to the stateless component, actions need to be created to send them back to the stateful component and the whole cycle starts again
