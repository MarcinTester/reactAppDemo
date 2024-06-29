import React, { useState } from "react";
import "./App.css";
import InputField from "./components/inputField";
import { Todo } from "./model";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  console.log(todo);

  return (
    <div className="App">
      <span className="heading">Tasks</span>
      <InputField todo={todo} setTodo={setTodo}/>
    </div>
  );
};

export default App;
