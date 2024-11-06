import { useParams } from "react-router";
import Cookies from "js-cookie";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import context from "../context/context";

const todoSchema = z.object({
  todo: z
    .string()
    .min(3, { message: "todo must be greater than 3 characters" }),
});

const EditTodoPage = () => {
  const { todoId } = useParams();
  const [myTodo, setMyTodo] = useState("");
  const navigate = useNavigate();
  const ctx = useContext(context);

  useEffect(() => {
    const previousTodos = ctx.getTodos();
    if (previousTodos) {
      const myTodos = JSON.parse(Cookies.get("todos"));
      console.log(myTodos);
      const todoIs = myTodos.find((todo) => todo.id === Number(todoId));
      setMyTodo(todoIs);
    }
  }, []);

  const initialValues = {
    todo: myTodo.todo,
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ values: initialValues, resolver: zodResolver(todoSchema) });

  const submitHandler = (data) => {
    console.log(data);
    const allTodos = [];
    const previousTodos = Cookies.get("todos");
    if (previousTodos) {
      const getPreviousTodos = JSON.parse(previousTodos);
      allTodos.push(
        ...getPreviousTodos.filter((todo) => todo.id !== Number(todoId))
      );
    }
    allTodos.push({ id: myTodo.id, todo: data.todo });
    ctx.setTodos(allTodos);
    reset();
    navigate("/");
  };

  return (
    <div>
      <Link to="/" className="text-blue-500 underline ml-6 mt-4 text-2xl">
        Back
      </Link>
      <form
        onSubmit={handleSubmit(submitHandler)}
        className="flex flex-col gap-5 w-72 m-auto pt-8"
      >
        <input
          type="text"
          {...register("todo")}
          className="border border-gray-500 outline-none px-1 py-1"
        />
        {errors.todo && <p className="text-red-400">{errors.todo.message}</p>}
        <button className="w-28 py-2 bg-purple-500 text-white rounded-md">
          Edit Todo
        </button>
      </form>
    </div>
  );
};

export default EditTodoPage;
