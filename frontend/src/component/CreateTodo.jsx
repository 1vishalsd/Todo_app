import React from "react";

function CreateTodo() {
  return (
    <div className="mt-20 w-1/2 m-auto justify-center flex flex-col shadow-lg p-4">
      <input
        className=" p-3 m-1 outline rounded-sm  text-xl"
        type="text"
        placeholder="title"
      />
      <br />
      <input
        className="p-3 m-1 outline rounded-sm text-xl"
        type="text"
        placeholder="description"
      />
      <br />
      <button className="bg-green-600 p-3 w-1/2 m-auto rounded-3xl">
        Add a Todo
      </button>
    </div>
  );
}

export default CreateTodo;
