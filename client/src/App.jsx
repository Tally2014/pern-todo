import { useState } from "react";
import "./App.css";
import InputTodo from "./components/InputTodo";
import ListTodo from "./components/ListTodo";

function App() {
  return (
    <>
      <div className="items-center">
        <InputTodo />
        <ListTodo />
      </div>
    </>
  );
}

export default App;
