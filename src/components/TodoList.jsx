import { useDispatch, useSelector } from "react-redux";
import TodoItems from "./TodoItems";
import { useState } from "react";
import { setFilter } from "../redux/actions";
import { BsSearch } from "react-icons/bs";

const TodoList = () => {
  const [sortByPriority, setSortByPriority] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const todos = useSelector((state) => state.todos);
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const filteredTodos = todos
    .filter((todo) =>
      todo.text.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((todo) => {
      if (filter === "ALL") return true;
      if (filter === "COMPLETED" && todo.completed) return true;
      if (filter === "INCOMPLETE" && !todo.completed) return true;
      return false;
    })
    .sort((a, b) => {
      if (sortByPriority) {
        const priorityOrder = { high: 3, med: 2, low: 1, no: 0 };
        return priorityOrder[b.priority] - priorityOrder[a.priority];
      }
      return 0;
    });
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };
  const handleFilterChange = (newFilter) => {
    dispatch(setFilter(newFilter));
  };

  return (
    <div>
      <div className="flex justify-between  pb-4  border-b-2 flex-wrap sm:flex-row flex-col-reverse">
        <div className="flex space-x-3 items-center justify-center flex-wrap ">
          <button
            className="text-sm px-2 py-1 sm:mb-0 mb-2 bg-gray-500 text-white rounded"
            onClick={() => handleFilterChange("ALL")}>
            All
          </button>
          <button
            className="text-sm px-2 py-1 sm:mb-0 mb-2 bg-gray-500 text-white rounded"
            onClick={() => handleFilterChange("COMPLETED")}>
            Completed
          </button>
          <button
            className="text-sm px-2 py-1 sm:mb-0 mb-2 bg-gray-500 text-white rounded"
            onClick={() => handleFilterChange("INCOMPLETE")}>
            Incomplete
          </button>
          <button
            className="text-sm px-2 py-1 sm:mb-0 mb-2 bg-gray-500 text-white rounded"
            onClick={() => setSortByPriority(!sortByPriority)}>
            {sortByPriority ? "Show Timely Order" : "Sort by Priority"}
          </button>
        </div>
        <div className="flex items-center gap-3 sm:mb-0 mb-4">
          <input
            className="flex-grow rounded p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search todos..."
          />
          <button className=" p-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none">
            <BsSearch size={20} />
          </button>
        </div>
      </div>
      <ul>
        {filteredTodos.length > 0 ? (
          filteredTodos.map((todo, index) => (
            <TodoItems key={index} todo={todo} index={index} />
          ))
        ) : (
          <li className="my-2 text-sm italic text-center">
            List is empty. Add a list
          </li>
        )}
      </ul>
    </div>
  );
};

export default TodoList;
