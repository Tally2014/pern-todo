import { useState } from "react";
import "./App.css";
import InputTodo from "./components/InputTodo";
import ListTodo from "./components/ListTodo";

function App() {
  const [refresh, setRefresh] = useState(false);
  return (
    <>
      <div className="items-center">
        <InputTodo refresh={refresh} setRefresh={setRefresh} />
        <ListTodo refresh={refresh} />
        {console.log(refresh)}
      </div>
    </>
  );
}

export default App;
