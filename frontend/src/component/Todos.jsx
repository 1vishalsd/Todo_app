import React from "react";

function Todos() {
  return (
    <div className="mt-20 w-1/2 m-auto justify-center flex flex-col shadow-lg p-4">
      <h1 className="ml-4 text-2xl ">go to gym</h1>
      <h1 className="ml-4 text-xl">You need of gym</h1>
      <button className="w-1/4 bg-gray-400 p-2 rounded-3xl ml-3">
        Mark a Completed
      </button>
    </div>
  );
}

export default Todos;
