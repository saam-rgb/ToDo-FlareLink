import {
  ADD_TODO,
  FILTER_TODO,
  MARK_ALL_COMPLETE,
  MARK_COMPLETE,
  MARK_INCOMPLETE,
  REMOVE_TODO,
  SEARCH_TEXT,
  TOGGLE_TODO,
} from "./actionTypes";

const initialState = {
  todos: [],
  filter: "ALL",
  sort: "NONE",
  search: " ",
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        todos: [
          ...state.todos,
          { text: action.payload.text, completed: false },
        ],
        filter: state.filter,
        search: state.search,
        sort: state.sort,
      };
    case TOGGLE_TODO:
      return {
        todos: state.todos.map((todo, index) =>
          index === action.payload.id
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
        filter: state.filter,
        search: state.search,
        sort: state.sort,
      };
    case REMOVE_TODO:
      return {
        todos: state.todos.filter((todo, index) => index != action.payload.id),
        filter: state.filter,
        search: state.search,
        sort: state.sort,
      };

    case MARK_COMPLETE:
      return {
        todos: state.todos.map((todo, index) =>
          index === action.payload.id ? { ...todo, completed: true } : todo
        ),
        filter: state.filter,
        search: state.search,
        sort: state.sort,
      };
    case MARK_INCOMPLETE:
      return {
        todos: state.todos.map((todo, index) =>
          index === action.payload.id ? { ...todo, completed: false } : todo
        ),
        filter: state.filter,
        search: state.search,
        sort: state.sort,
      };
    case FILTER_TODO:
      return {
        todos: state.todos,
        filter: action.payload.filter,
        search: state.search,
        sort: state.sort,
      };
    case FILTER_TODO:
      return {
        todos: state.todos,
        filter: state.filter,
        search: state.search,
        sort: action.payload.sort,
      };
    case SEARCH_TEXT:
      return {
        todos: state.todos,
        filter: state.filter,
        search: action.payload.searchText,
        sort: state.sort,
      };
    case MARK_ALL_COMPLETE:
      return {
        todos: state.todos.map((todo) => ({ ...todo, completed: true })),
        filter: state.filter,
        search: state.search,
        sort: state.sort,
      };
    default:
      return state;
  }
};

export default todoReducer;
