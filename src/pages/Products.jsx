import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProducts } from "../redux/product/product-actions";
import { Link } from "react-router-dom";

const ProductsPage = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);

  const categories = [];

  for (const item of products) {
    if (!categories.includes(item.category)) {
      categories.push(item.category);
    }
  }

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div>
      <h1 className="text-center text-2xl my-4 text-blue-600 font-bold">
        View Products by category
      </h1>
      <ul className="flex flex-col gap-8 m-5 text-blue-600 underline">
        {categories.map((category) => (
          <Link to={`/products/${category}`} key={Math.random()}>
            {category.toUpperCase()}
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default ProductsPage;
