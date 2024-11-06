import { useContext } from "react";
import { NavLink } from "react-router-dom";
import context from "../context/context";

const DisplayTodos = () => {
  const ctx = useContext(context);

  const deleteHandler = (id) => {
    const previousTodos = ctx.getTodos();
    if (previousTodos) {
      const getPreviousTodos = JSON.parse(previousTodos);
      const newTodos = getPreviousTodos.filter((todo) => id !== todo.id);
      ctx.setTodos(newTodos);
    }
  };

  return (
    <div className="mt-10 flex flex-col gap-6">
      <h1 className="text-2xl font-bold text-purple-500">My Todos</h1>
      <ul className="flex flex-col gap-6 list-decimal">
        {ctx.myTodos.map((item) => (
          <li className="flex gap-6" key={item.id}>
            <p>{item.todo}</p>
            <NavLink
              to={`todo/${item.id}`}
              className="px-3 py-2 bg-blue-500 text-white rounded-md"
            >
              Edit
            </NavLink>
            <button
              onClick={() => deleteHandler(item.id)}
              className="px-3 py-2 bg-red-500 text-white rounded-md"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DisplayTodos;
