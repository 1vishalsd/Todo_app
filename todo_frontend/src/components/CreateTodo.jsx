import React from "react";

function CreateTodo() {
  return (
    <div>
      <input type="text" placeholder="title" />
      <br />
      <input type="text" placeholder="descripation" />
      <br />
      <button>Add a Todo</button>
    </div>
  );
}

export default CreateTodo;
