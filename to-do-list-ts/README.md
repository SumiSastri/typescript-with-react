# To-do-list in React with Typescript

This section covers the fundamentals of Typescript using React and React Hooks.
Level-intermediatory. Requires prior fundamentalsof JavaScript, TypeScript, Node & React.

##### Scaffolding & File Structure 

- Make sure you have node and npm, install create react app ```npm install create-react-app```
- cd into the project and create a new folder ```npx create-react-app to-do-list-ts```
- cd into the to-do-list-ts folder and install typescript for react ```npm install typescript @types/node @types/react @types/react-dom```
- go into src folder and change ```app.js``` to ```app.tsx``` npm run start to make sure the app is up and running on port 3000
- go into ```app.tsx``` remove imports from React template and run a "Hello World" with a h1 tag check ```app.tsx``` up and running
- import HOCs ```import React, {Fragment, useState} from 'react';``` to use Hooks.
- download React developer tools as browswer extension to debug
- Create to-do component with hooks and test adding a console.log and debugger to take a deep dive into the function called from ```useState``` hook

At this stage the code should look like this

```
import React, {Fragment, useState} from 'react';

import './App.css';

function App() {
  const [value, setValue] = useState ('')
  console.log(value)
  debugger
  return (
    <div className="App">
      <h1>TypeScript & React using React Hooks</h1>
      <Fragment><form>
        <input type="text"></input>
        <button>Submit new to-do</button>
      </form></Fragment>
      
    </div>
  );
}

export default App;
```
The debugger should show state as a function - drill down into the function to see how the compiler shortens the function and prototype inheritance. The documentation for hooks for this step [https://reactjs.org/docs/hooks-overview.html] More of how Hooks works in the main section of this project.

![The console check should show state as a function](/to-do-list-ts/src/assets/debugger-stateHook.png?raw=true "use-state logged")

##### React Hooks
React Hooks was introduced in React version 16.8 and upwards and allows you to use state and other React features without writing a class. You will now find running ```create-react-app``` compiles and has no stateful components in the main ```app.js```. It is backwards compatible with previous versions with no breaking changes.

Documentation [https://reactjs.org/docs/hooks-intro.html] There is a 1 hour video that may not be worth watching at this stage. A lot of the video is summarized in the documentation. Worth watching it a few times after you have used Hooks in a project.

Hooks is an API to props, state, context, refs and lifecycle hooks. It makes the app faster. You can use hooks selectively experimenting with a few components at a time, there is no need to rewrite legacy code.

Challenges with React that Hooks solve: 
 - Inability to use state in another component, hooks allows for a better primitive sharing of state between compoinents
 - Life-cycle methods difficult to maintain between components, hooks allows you to break down lifecycle methods into smaller funcitons and reuse them
 - Class-based components rely on prototype inheritance, this can be difficult to learn and use due to call, bind methods of lexical ```this``` in state and props. Hooks simplifies the use case of class based components.

Using State as a hook sets state to an array. ```const [value, setValue] = useState ('')``` where state is defined as an empty string.

This is a deconstruction of the array where a value is set, ```setValue``` as you will see in the debugger is a function.

Test this by logging the function ```setValue``` before and after you call the function, the app will break as the test runs infinitely but you will be able to see the function call. Clear this function after you have tested it to see how hooks works by deconstructing the array where the first variable is the value and the second is the function.
```
const [value, setValue] = useState ('')
  console.log(value)
  setValue('tests if empty string reset to this test string')
  console.log(value)
  ```

  The function ```useState``` in Typescript is a generic that returns initial state which is either the intitial state  updated payload of state function from the Hooks API.

  ```function useState<S>(initialState: S|(() => S)): [S:Dispatch<SetStateAction<S>>]```

  To strictly type check this function, we now explicitly define initial state as a string

  ``` const [value, setValue] = useState<string> ('')```

  You can now pass the value of the ```useState``` hook to the form as a value.

  ``` <input type="text" value ={value}></input>```

  To handle the event submit, you can now proceed to write your ```handleSubmit``` function. However, because we are writing React with TypeScript, it is important to know the exact type of event this is and how it is notated in TypeScript. TypeScript is difficult to debug once there is an error. I did a google search looking for how to find the type of an event in React and found this article the most useful [https://blaipratdesaba.com/react-typescript-cheatsheet-form-elements-and-onchange-event-types-8c2baf03230c]
  
  More reading 
  Beginners guide blog [https://dev.to/bmcmahen/a-beginners-guide-to-using-typescript-with-react-7m6]
  [https://medium.com/innovation-and-technology/deciphering-typescripts-react-errors-8704cc9ef402]

  Once you add the type for the event the errors go away and the component will mount. The code at this stage looks like this.

  ```
  import React, { Fragment, useState } from "react";

import "./App.css";

function App() {
  const [value, setValue] = useState<string>("");

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setValue("");
  };

  return (
    <div className="App">
      <h1>TypeScript & React using React Hooks</h1>
      <Fragment>
        <form>
          <input
            type="text"
            value={value}
            onChange={e => setValue(e.target.value)}
          ></input>
          <button type="submit">Submit new to-do</button>
        </form>
      </Fragment>
    </div>
  );
}

export default App;
```
