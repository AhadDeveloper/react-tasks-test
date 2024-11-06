import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { getProducts, deleteProduct } from "../redux/product/product-actions";

const CategoryPage = () => {
  const products = useSelector((state) => state.products.products);
  const [productsByCategory, setProductsByCategory] = useState([]);
  const { categoryId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts()).then(() => {
      setProductsByCategory(
        products.filter((item) => item.category === categoryId)
      );
    });
  }, [dispatch]);

  const deleteHandler = (id) => {
    dispatch(deleteProduct(id));
  };

  return (
    <div className="m-5 flex flex-col gap-5">
      <Link to="/products" className="text-md underline text-blue-500">
        Back
      </Link>
      <ol className="flex flex-col gap-9 list-disc">
        {productsByCategory.map((item) => (
          <li key={item.id} className="flex flex-col gap-3 list-decimal">
            <h1 className="text-xl font-bold">{item.title}</h1>
            <img className="h-80 w-64" src={item.image} alt="product-img" />
            <p>{item.description}</p>
            <p className="font-bold">Price: {item.price}</p>
            <div className="flex gap-8">
              <Link
                to={`/products/${categoryId}/${item.id}`}
                className="p-2 bg-blue-500 text-white rounded-md"
              >
                Edit
              </Link>
              <button
                onClick={() => deleteHandler(item.id)}
                className="p-2 bg-red-500 text-white rounded-md"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default CategoryPage;
