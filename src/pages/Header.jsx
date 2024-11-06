import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-orange-400 p-3 flex justify-center gap-10 text-xl text-white font-bold">
      <NavLink
        className={({ isActive }) => `${isActive && "text-gray-700"}`}
        to="/"
      >
        Tasks
      </NavLink>
      <NavLink
        to="/products"
        className={({ isActive }) => `${isActive && "text-gray-700"}`}
      >
        Products
      </NavLink>
    </div>
  );
};

export default Header;
