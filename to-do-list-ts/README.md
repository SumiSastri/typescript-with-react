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

  To handle the event submit, you can now proceed to write your ```handleSubmit``` function and pass it to the form jsx element to trigger the submit action. 
  
  However, because we are writing React with TypeScript, it is important to know the exact type of event this is and how it is notated in TypeScript. 
  
  TypeScript is difficult to debug once there is an error. I did a google search looking for how to find the type of an event in React and found this article the most useful [https://blaipratdesaba.com/react-typescript-cheatsheet-form-elements-and-onchange-event-types-8c2baf03230c]
  
  More reading 
  Beginners guide blog [https://dev.to/bmcmahen/a-beginners-guide-to-using-typescript-with-react-7m6]
  [https://medium.com/innovation-and-technology/deciphering-typescripts-react-errors-8704cc9ef402]

  Once you add the type for the event the errors go away and the component will mount. The code at this stage looks like this.

  ```
  import React, { Fragment, useState } from "react";

import "./App.css";

function App() {
  const [value, setValue] = useState<string>("");

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>):void => {
    e.preventDefault();
    setValue("");
  };

  return (
    <div className="App">
      <h1>TypeScript & React using React Hooks</h1>
      <Fragment>
        <form onSubmit={handleSubmit}>
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
Now that we have the form and submit form event handler set up, we can change the value in the form and set up the TypeScript interface needed for the React Hook, ```useState```.

Under the hood, the hook calls a class-based componenet via an API and therefore the interface outlines the type contract between the class constructor and state.

State is the text of the to-do item and if it is done the flag of done to be toggled with a boolean value. When we create a to-do we want to push it into an array of to-dos. This array for the moment is an empty array.
```
  interface ITo_do {
    text: string
    complete: boolean
  }

  const [toDos, setTodos] = useState<ITo_do[]>([]);
  ```

  To add a single to-do we write our factory-function. The new to-do will be passed by value to the ```handleSubmit``` function. With every user input, on submitting the form and clicking the submit button, the event triggers the adding of the single todo to the empty array. Each new call of the ```onSubmit``` function adds a new to-do item to the array. State in the deconstructed array is now set to the new state of the to-do that is added and is passed again by value to the ```useState``` hook. It works exactly like ```this.setState``` in a stateful component but this time instead of creating state in the component we hook to the stateful component via the ```useState``` method and the API that connects the method to the stateful component.

  The factory function can be written like so:

```
    const addsNewTodo = (text: string) => {
    const addNewTodo : ITo_do[] = [...toDos, {text: text, complete: false}]
    setTodos(addNewTodo)
  }
console.log(toDos)
```

Refactoring the declaration of the event type can make the ```handleSubmit``` function cleaner and we can pass the factory function by value to be called in the ```handleSubmit``` function, like so:-

```
  type FormElement = React.FormEvent<HTMLFormElement>

   const handleSubmit = (e:FormElement):void => {
    e.preventDefault();
    addsNewTodo(value)
    setValue("");
  };
 ```

 By logging the value we are passing ```const [toDos, setTodos] = useState<ITo_do[]>([]);``` to the ```useState``` hook, we can check in the console if the function works as intended.

 To check that the input field is working as we type a new letter of the alphabet the component will render with the change and you will see several empty arrays formed.
 ![Empty Arrays With Input Field](/to-do-list-ts/src/assets/text-input-working.png)

 To check that the ```onSubmit``` event handler has fired, you should get your first input in the console.

 ![OnSubmit firing](/to-do-list-ts/src/assets/on-submit-working.png)

 We now want to map through the ToDos array, match the index to the element - here the element is each to-do which is an object with the text and boolean in the key-value pairs. We only want to render the text which we access from the element with dot-notation as the element is an object.
 
 ```
  <section>
     {array.map((index, element) =>(<h6 key=index>{element}</h6>))}
        </section>
   ```
The arguments that the map function takes are the array and the index or keys of the array. Since we have added TypeScript, we need to set the type of the params in the arguments.

The to-dos are an array, whose type we have outlined in the interface declaration of ```ITo_Dos```, the index keys are primitive numbers. What we want to return is a jsx h6 element within the section.

```<section>
          {toDos.map((toDo: ITo_do, index: number) => (<h6 key={index}>{toDo.text}</h6>))}
        </section>
```

![Render List Working](/to-do-list-ts/src/assets/map-and-render-list.png)