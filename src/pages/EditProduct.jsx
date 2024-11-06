import { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router";
import { getProducts } from "../redux/product/product-actions";
import { Link } from "react-router-dom";
import { productActions } from "../redux/product/product-slice";

const EditProductPage = () => {
  const products = useSelector((state) => state.products.products);
  const { productId, categoryId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const getProduct = products.find((item) => item.id === Number(productId));
  console.log(getProduct);

  const editHandler = () => {
    navigate(`/products/${categoryId}`);
  };

  return (
    <div className="m-4">
      <h1 className="text-2xl my-4 text-blue-600">Edit Product</h1>
      <Link
        to={`/products/${categoryId}`}
        className="text-md underline text-blue-500 mb-4"
      >
        Back
      </Link>
      <form className="flex flex-col gap-6">
        <input
          type="text"
          value={getProduct?.title}
          className="border p-2 w-96"
        />
        <img
          className="h-80 w-64"
          src={getProduct?.image}
          value={getProduct?.image}
        />
        <textarea
          value={getProduct?.description}
          className="w-96 h-48 p-2 border"
        ></textarea>
        <div>
          <label>Price: </label>
          <input type="number" value={getProduct?.price} />
        </div>
        <button
          onClick={editHandler}
          className="p-2 bg-blue-500 rounded-md text-white w-14"
        >
          Edit
        </button>
      </form>
    </div>
  );
};

export default EditProductPage;
