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


![The console check should show state as a function](/to-do-list-ts/src/assets/debugger-stateHook.png?raw=true "use-state logged")