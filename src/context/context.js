import { createContext } from "react";

const context = createContext({
  getTodos: () => {},
  setTodos: (data) => {},
  myTodos: [],
  setMyTodos: () => {},
});

export default context;
