import {
  ADD_TODO,
  FILTER_TODO,
  MARK_ALL_COMPLETE,
  MARK_COMPLETE,
  MARK_INCOMPLETE,
  REMOVE_TODO,
  SEARCH_TEXT,
  SET_PRIORITY,
  SORT_TODO,
  TOGGLE_TODO,
} from "./actionTypes";

export const addTodo = (text) => ({
  type: ADD_TODO,
  payload: { text },
});

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  payload: { id },
});

export const removeTodo = (id) => ({
  type: REMOVE_TODO,
  payload: { id },
});
export const markComplete = (id) => ({
  type: MARK_COMPLETE,
  payload: { id },
});
export const markIncomplete = (id) => ({
  type: MARK_INCOMPLETE,
  payload: { id },
});
export const markAllComplete = () => ({
  type: MARK_ALL_COMPLETE,
});
export const filterTodo = (filter) => ({
  type: FILTER_TODO,
  payload: { filter },
});
export const searchText = (searchText) => ({
  type: SEARCH_TEXT,
  payload: { searchText },
});
export const sortTodo = (sort) => ({
  type: SORT_TODO,
  payload: { sort },
});
export const setPriority = (id) => ({
  type: SET_PRIORITY,
  payload: { id },
});
