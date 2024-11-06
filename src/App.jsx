import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ContextProvider from "./context/ContextProvider";
import {
  RootLayout,
  SignupPage,
  LoginPage,
  TodosPage,
  EditTodoPage,
  ProductsPage,
  ErrorPage,
  CategoryPage,
  EditProductPage,
} from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <TodosPage /> },
      { path: "todo/:todoId", element: <EditTodoPage /> },
      { path: "/products", element: <ProductsPage /> },
      { path: "/products/:categoryId", element: <CategoryPage /> },
      {
        path: "/products/:categoryId/:productId",
        element: <EditProductPage />,
      },
    ],
  },
  { path: "/login", element: <LoginPage /> },
  { path: "/signup", element: <SignupPage /> },
]);

function App() {
  return (
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
  );
}

export default App;
