import React from "react";

export default function InputTodo() {
  return (
    <>
      <h1 className="text-3xl text-center mt-5">Pern Todo List</h1>
      <form className="flex justify-center mt-5">
        <input
          type="text"
          class=" w-[50%] rounded-md border-2 mx-1 border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
        />

        <button
          class="inline-block shrink-0 rounded-md 
        border border-green-600 bg-green-600 
        px-12 py-3 text-sm font-medium text-white transition 
        hover:bg-transparent hover:text-green-600 focus:outline-none 
        focus:ring active:text-green-500"
        >
          Add
        </button>
      </form>
    </>
  );
}
