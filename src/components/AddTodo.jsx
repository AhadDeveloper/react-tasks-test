import { useContext } from "react";
import { useForm } from "react-hook-form";
import context from "../context/context";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const initialValues = {
  todo: "",
};

const todoSchema = z.object({
  todo: z
    .string()
    .min(3, { message: "todo must be greater than 3 characters" }),
});

const AddTodo = () => {
  const ctx = useContext(context);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ values: initialValues, resolver: zodResolver(todoSchema) });

  const submitHandler = (data) => {
    const allTodos = [];
    const previousTodos = ctx.getTodos();
    if (previousTodos) {
      const getPreviousTodos = JSON.parse(previousTodos);
      allTodos.push(...getPreviousTodos);
    }
    allTodos.push({ id: Math.random(), todo: data.todo });
    ctx.setTodos(allTodos);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      className="flex flex-col gap-5 w-72"
    >
      <input
        type="text"
        {...register("todo")}
        className="border border-gray-500 outline-none px-1 py-1"
      />
      {errors.todo && <p className="text-red-400">{errors.todo.message}</p>}
      <button className="w-28 py-2 bg-red-500 text-white rounded-md">
        Add Todo
      </button>
    </form>
  );
};

export default AddTodo;
