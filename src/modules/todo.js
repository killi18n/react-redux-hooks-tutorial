import uuid from "uuid/v4";

const initialState = {
  todos: [
    {
      id: uuid(),
      name: "Go to the gym",
      complete: false
    },
    {
      id: uuid(),
      name: "Do laundry",
      complete: true
    }
  ]
};

function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, payload]
      };
    case "TOGGLE_TODO":
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === payload ? { ...todo, complete: !todo.complete } : todo
        )
      };
    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== payload)
      };
    default:
      return state;
  }
}

export const addTodoAction = todo => ({
  type: "ADD_TODO",
  payload: todo
});

export const toggleTodoAction = id => ({
  type: "TOGGLE_TODO",
  payload: id
});

export const deleteTodoAction = id => ({
  type: "DELETE_TODO",
  payload: id
});

export default reducer;
