import React, { useState } from "react";
import { useDispatch } from "react-redux";
import TodoList from "./TodoList";
import { BsPlus } from "react-icons/bs";
import { addTodo } from "../redux/actions";

const Todo = () => {
  const [newTodoText, setNewTodoText] = useState("");
  const [priority, setPriority] = useState("no");
  const dispatch = useDispatch();

  const handleAddTodoClick = () => {
    if (newTodoText.trim() !== "") {
      dispatch(addTodo(newTodoText.trim(), priority));
      setNewTodoText("");
      setPriority("no");
    }
  };

  return (
    <div className="max-w-4xl mx-auto sm:mt-8 p-4 bg-gray-100 rounded">
      <h2 className="mt-3 mb-6 text-2xl font-bold text-center uppercase">
        TODO APP
      </h2>
      <div className="flex items-center mb-4 space-x-3">
        <input
          id="addTodoInput"
          className="flex-grow p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
          type="text"
          value={newTodoText}
          onChange={(e) => setNewTodoText(e.target.value)}
          placeholder="Add Todo"
        />

        <select
          className="mr-4 px-2 py-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}>
          <option value="no">No Priority</option>
          <option value="high">High</option>
          <option value="med">Medium</option>
          <option value="low">Low</option>
        </select>

        <button
          className="ml-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
          onClick={handleAddTodoClick}>
          <BsPlus size={20} />
        </button>
      </div>

      <TodoList />
    </div>
  );
};

export default Todo;
