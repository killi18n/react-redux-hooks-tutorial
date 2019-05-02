import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./TodoList.module.scss";

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todo.todos);
  const onToggle = useCallback(
    id => {
      dispatch({ type: "TOGGLE_TODO", payload: id });
    },
    [dispatch]
  );
  return (
    <div>
      {todos.map(todo => {
        return (
          <div
            key={todo.id}
            onClick={() => onToggle(todo.id)}
            className={
              todo.complete
                ? [styles.todoItem, styles.completed].join(" ")
                : styles.todoItem
            }
          >
            {todo.name}
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
