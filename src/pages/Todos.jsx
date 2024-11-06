import AddTodo from "../components/AddTodo";
import DisplayTodos from "../components/DisplayTodos";

const TodosPage = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-3xl text-center text-amber-600 p-4 font-bold">
        TodoApp
      </h1>
      <div className="m-10">
        <AddTodo />
        <DisplayTodos />
      </div>
    </div>
  );
};

export default TodosPage;
