import React from "react";

function CreateTodo() {
  return (
    <div className="shadow p-4 w-full max-w-screen-md m-auto justify-center item-center  ">
      <input
        className=" w-full my-4 text-lg outline rounded p-2  "
        type="text"
        placeholder="title"
      />
      <br />
      <input
        className="w-full my-4 text-lg outline rounded p-2"
        type="text"
        placeholder="descripation"
      />
      <br />
      <button
        className="bg-green-600  w-max p-2 m-4 rounded-lg
      "
      >
        Add a Todo
      </button>
    </div>
  );
}

export default CreateTodo;
