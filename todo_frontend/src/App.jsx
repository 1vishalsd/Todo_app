import { useState } from "react";

import "./App.css";
import CreateTodo from "./components/CreateTodo";
import Todos from "./components/Todos";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <CreateTodo />
      <Todos />
    </>
  );
}

export default App;
