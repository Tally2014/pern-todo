import { useState, useEffect } from "react";
import EditTodo from "./EditTodo";

export default function ListTodo({ refresh }) {
  const [todos, setTodos] = useState([]);
  const [isEditing, setIsEditing] = useState(false); // To control the visibility of the modal
  const [selectedTodo, setSelectedTodo] = useState(null); // To store the selected todo for editing

  const getTodos = async () => {
    try {
      const response = await fetch("http://localhost:5100/todos");
      const jsonData = await response.json();

      setTodos(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  const deleteTodo = async (id) => {
    try {
      const deleteTodo = await fetch(`http://localhost:5100/todos/${id}`, {
        method: "DELETE",
      });

      setTodos(todos.filter((todo) => todo.todo_id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

  const handleEditClick = (todo) => {
    setIsEditing(true);
    setSelectedTodo(todo);
  };

  useEffect(() => {
    getTodos();
  }, [refresh]);

  return (
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-5 mx-10">
      <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="px-6 py-3">
              Description
            </th>
            <th scope="col" class="px-6 py-3">
              <span class="sr-only">Actions</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr class="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {todo.description}
              </th>
              <td class="px-6 py-4 text-right">
                <a
                  href="#"
                  class="font-medium text-blue-600 dark:text-blue-500 hover:underline mr-10"
                  onClick={() => handleEditClick(todo)}
                >
                  Edit
                </a>
                <a
                  href="#"
                  class="font-medium text-red-600 dark:text-red-500 hover:underline"
                  onClick={() => deleteTodo(todo.todo_id)}
                >
                  Delete
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {isEditing && (
        <EditTodo
          closeModal={() => setIsEditing(false)}
          todo={selectedTodo}
          refreshTodos={getTodos}
        />
      )}
    </div>
  );
}
