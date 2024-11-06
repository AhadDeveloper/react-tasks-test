import { useState } from "react";
import context from "./context";
import Cookies from "js-cookie";

const ContextProvider = (props) => {
  const [myTodos, setMyTodos] = useState(
    Cookies.get("todos") ? JSON.parse(Cookies.get("todos")) : []
  );

  const getTodos = () => {
    return Cookies.get("todos");
  };

  const setTodos = (data) => {
    Cookies.set("todos", JSON.stringify(data));
    setMyTodos(data);
  };

  const value = { getTodos, setTodos, myTodos, setMyTodos };
  return <context.Provider value={value}>{props.children}</context.Provider>;
};

export default ContextProvider;
