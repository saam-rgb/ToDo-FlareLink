// FilterButtons.jsx
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { markAllCompleted, setFilter, sortTodos } from "../redux/actions";

const FilterButton = () => {
  const dispatch = useDispatch();
  const currentFilter = useSelector((state) => state.filter);

  const handleFilter = (filter) => {
    dispatch(setFilter(filter));
  };

  return (
    <div className="flex space-x-4 items-center">
      <button
        className="text-sm px-2 py-1 bg-gray-500 text-white rounded"
        onClick={() => dispatch(sortTodos("PRIORITY"))}>
        Sort by Priority
      </button>
      <button
        className="text-sm px-2 py-1 bg-gray-500 text-white rounded"
        onClick={() => dispatch(sortTodos("COMPLETED"))}>
        Show Completed
      </button>
      <button
        className="text-sm px-2 py-1 bg-gray-500 text-white rounded"
        onClick={() => dispatch(sortTodos("INCOMPLETE"))}>
        Show Incomplete
      </button>
    </div>
  );
};

export default FilterButton;
