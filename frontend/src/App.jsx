import { useState } from "react";
import CreateTodo from "./component/CreateTodo";
import Todos from "./component/Todos";

function App() {
  return (
    <div>
      <CreateTodo></CreateTodo>
      <Todos></Todos>
    </div>
  );
}

export default App;
