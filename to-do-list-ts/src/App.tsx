import React, { Fragment, useState } from "react";

import "./App.css";

function App() {
  type FormElement = React.FormEvent<HTMLFormElement>;
  interface ITo_do {
    text: string;
    complete: boolean;
  }
  const [value, setValue] = useState<string>("");
  const [toDos, setTodos] = useState<ITo_do[]>([]);

  const handleSubmit = (e: FormElement): void => {
    e.preventDefault();
    addsNewTodo(value);
    setValue("");
  };

  const addsNewTodo = (text: string) => {
    const addNewTodo: ITo_do[] = [...toDos, { text: text, complete: false }];
    setTodos(addNewTodo);
  };
  console.log(toDos);

  return (
    <div className="App">
      <h1>TypeScript & React using React Hooks</h1>
      <Fragment>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            required
          />
          <button type="submit">Submit new to-do</button>
        </form>
        <section>
          {toDos.map((toDo: ITo_do, index: number) => (<h6 key={index}>{toDo.text}</h6>))}
        </section>
      </Fragment>
    </div>
  );
}

export default App;
