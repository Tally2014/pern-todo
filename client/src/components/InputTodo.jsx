import { useState } from "react";

export default function InputTodo() {
  const [description, setDescription] = useState("");

  const onSbumitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { description };
      const response = await fetch("http://localhost:5100/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      console.log(response);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <h1 className="text-3xl text-center mt-5">Pern Todo List</h1>
      <form className="flex justify-center mt-5" onSubmit={onSbumitForm}>
        <input
          type="text"
          class="px-2 w-[50%] rounded-md border-2 mx-1 border-gray-200 bg-white text-sm text-gray-700 shadow-sm focus:outline-green-200"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button
          class="inline-block shrink-0 rounded-md 
        border border-green-600 bg-green-600 
        px-5 py-3 text-sm font-medium text-white transition 
        hover:bg-transparent hover:text-green-600 focus:outline-none 
        focus:ring active:text-green-500"
        >
          Add
        </button>
      </form>
    </>
  );
}
