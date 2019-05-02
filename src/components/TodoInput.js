import React, { useState, useCallback } from "react";
import uuid from "uuid/v4";
import { useDispatch } from "react-redux";

const TodoInput = () => {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();

  const onChange = event => {
    setTodo(event.target.value);
  };

  const onSubmit = useCallback(
    event => {
      event.preventDefault();
      if (todo.trim() === "") return;
      dispatch({
        type: "ADD_TODO",
        payload: {
          id: uuid(),
          name: todo,
          complete: false
        }
      });
      setTodo("");
    },
    [todo, dispatch]
  );

  return (
    <form onSubmit={onSubmit}>
      <div className="form-div">
        <input
          type="text"
          name="todo"
          placeholder="add a todo"
          value={todo}
          onChange={onChange}
        />
        <button type="submit">Add Todo</button>
      </div>
    </form>
  );
};

export default TodoInput;
