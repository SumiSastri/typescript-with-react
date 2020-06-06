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

  const addsNewTodo = (text: string): void => {
    const addNewTodo: ITo_do[] = [...toDos, { text: text, complete: false }];
    setTodos(addNewTodo);
  };

  const toggleCompleteIncomplete = (index: number): void => {
    const completedToDo: ITo_do[] = [...toDos];
    completedToDo[index].complete = !completedToDo[index].complete;
    setTodos(completedToDo);
  };

  const permanentlyDeleteToDo = (index: number): void => {
    const removedToDo: ITo_do[] = [...toDos];
    removedToDo.splice(index, 1);
    setTodos(removedToDo);
  };

  return (
    <div className="App">
      <h1>TypeScript & React using React Hooks</h1>
      <>
        <form onSubmit={handleSubmit}>
          <input
            name="to-do-item"
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            required
          />
          <button type="submit">Submit new to-do</button>
        </form>
        <section>
          {toDos.map((toDo: ITo_do, index: number) => (
            <Fragment key={index}>
              <h6>
                {toDo.text}
                <button
                  style={{ color: toDo.complete ? "Red" : "Black" }}
                  type="button"
                  onClick={() => toggleCompleteIncomplete(index)}
                >
                  {toDo.complete
                    ? "Task completed - delete permanenently?"
                    : "Click here when task completed"}
                </button>
                <button
                  style={{
                    backgroundColor: "Red",
                    color: "white",
                    outline: "black",
                  }}
                  onClick={() => permanentlyDeleteToDo(index)}
                >
                  Delete Permanently
                </button>
              </h6>
            </Fragment>
          ))}
        </section>
      </>
    </div>
  );
}

export default App;
