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
    <div className="max-w-4xl mx-auto p-4 bg-gray-100 rounded-md">
      <h2 className="mt-3 mb-6 text-2xl font-bold text-center uppercase">
        TODO APP
      </h2>
      <div className="flex items-center sm:mb-4 mb-2 space-x-3 flex-wrap justify-center">
        <input
          id="addTodoInput"
          className="flex-grow p-2 rounded border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 sm:mb-0 mb-2"
          type="text"
          value={newTodoText}
          onChange={(e) => setNewTodoText(e.target.value)}
          placeholder="Add Todo"
        />

        <select
          className="mr-4 px-2 py-2 rounded border-b-2 md:w-28 sm:w-48 w-1/2 border-gray-300 focus:outline-none focus:border-blue-500 "
          value={priority}
          onChange={(e) => setPriority(e.target.value)}>
          <option value="no">No Priority</option>
          <option value="high">High</option>
          <option value="med">Medium</option>
          <option value="low">Low</option>
        </select>

        <button
          className=" flex items-center justify-center ml-4 p-2 gap-1 sm:w-9  w-1/3 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
          onClick={handleAddTodoClick}>
          <BsPlus size={20} />
          <p className="sm:hidden block pr-1">Add</p>
        </button>
      </div>

      <TodoList />
    </div>
  );
};

export default Todo;
