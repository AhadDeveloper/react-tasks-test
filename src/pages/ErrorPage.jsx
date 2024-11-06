import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col justify-center items-center m-8 gap-6">
      <h1 className="text-3xl text-red-600 font-bold">An Error Occured</h1>
      <p className="text-2xl text-red-500 font-bold">Page not found</p>
      <Link to="/" className="p-2 bg-blue-600 text-white rounded-md">
        Go to homepage
      </Link>
    </div>
  );
};

export default ErrorPage;
