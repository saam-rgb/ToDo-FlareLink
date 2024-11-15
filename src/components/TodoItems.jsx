import { useDispatch } from "react-redux";
import { removeTodo, markCompleted, markIncomplete } from "../redux/actions";
import { FaTrash, FaCheck, FaTimes } from "react-icons/fa";
import { toast, Toaster } from "sonner";

const TodoItems = ({ todo, index }) => {
  const dispatch = useDispatch();

  return (
    <li className="flex flex-col sm:flex-row sm:items-center justify-between border-b-2 py-2 gap-4">
      <div className="flex items-center">
        <Toaster richColors closeButton />
        {/* toast */}
        <span className="mr-4 text-gray-500">{index + 1}.</span>
        <span
          className={`mr-4 ${
            todo.completed ? "line-through text-gray-500" : ""
          }`}>
          {todo.text}
        </span>
      </div>
      <div className="space-x-3 ml-8">
        <span className="font-bold">{todo.priority}</span>

        <button
          className="mr-2 text-sm bg-red-500 text-white sm:px-2 px-1 py-1 rounded"
          onClick={() => {
            dispatch(removeTodo(index));
            toast.error("Task deleted");
          }}>
          <FaTrash />
        </button>
        {!todo.completed ? (
          <button
            className="text-sm bg-green-500 text-white sm:px-2 px-1 py-1 rounded"
            onClick={() => {
              dispatch(markCompleted(index));
              toast.success("Task completed");
            }}>
            <FaCheck />
          </button>
        ) : (
          <button
            className="text-sm bg-yellow-500 text-white sm:px-2 px-1 py-1 rounded"
            onClick={() => {
              dispatch(markIncomplete(index));
              toast.error("Task moved to incomplete");
            }}>
            <FaTimes />
          </button>
        )}
      </div>
    </li>
  );
};

export default TodoItems;
