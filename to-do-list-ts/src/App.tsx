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
