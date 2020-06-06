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
