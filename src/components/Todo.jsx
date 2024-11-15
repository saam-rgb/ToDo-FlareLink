import React, { useState } from "react";

import { useDispatch } from "react-redux";
import TodoList from "./TodoList";
import { BsPlus } from "react-icons/bs";
import { addTodo } from "../redux/actions";
import { toast, Toaster } from "sonner";

const Todo = () => {
  const [newTodoText, setNewTodoText] = useState("");
  const [priority, setPriority] = useState("No");
  const dispatch = useDispatch();

  //* add todo
  const handleAddTodoClick = () => {
    if (newTodoText.trim() === "") {
      toast.error("Please enter a Task");
    }
    if (newTodoText.trim() !== "") {
      dispatch(addTodo(newTodoText.trim(), priority));
      setNewTodoText("");
      setPriority("No");
      toast.success("Task added successfully");
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 bg-gray-100 rounded-md">
      <h2 className="mt-3 mb-6 font-primary text-2xl font-semibold text-center uppercase">
        TODO APP
      </h2>
      <Toaster richColors closeButton />
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
          <option value="No">No Priority</option>
          <option value="High">High</option>
          <option value="Med">Medium</option>
          <option value="Low">Low</option>
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
