import React from "react";
import { Provider } from "react-redux";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import store from "./modules";
import styles from "./App.module.scss";

function App() {
  return (
    <Provider store={store}>
      <div className={styles.main}>
        <TodoInput />
        <TodoList />
      </div>
    </Provider>
  );
}

export default App;
