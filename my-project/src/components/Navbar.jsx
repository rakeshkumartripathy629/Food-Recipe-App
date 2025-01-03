import React from "react";
import { useDispatch } from "react-redux";
import { setSearch } from "../redux/slices/SearchSlice";

const Navbar = () => {
  const dispatch = useDispatch();

  return (
    <nav className="flex flex-col lg:flex-row justify-between items-center py-3 mx-6 mb-10">
      <div className="flex items-center space-x-4">
        {/* Restaurant Logo */}
        <img 
          src="https://png.pngtree.com/template/20200704/ourmid/pngtree-restaurant-logo-design-vector-template-image_388753.jpg" // Replace with the actual path to your logo
          alt="Restaurant Logo"
          className="h-12 w-12 object-contain" // Adjust size as needed
        />
        <div>
          <h3 className="text-xl font-bold text-gray-600">
            {new Date().toUTCString().slice(0, 16)}
          </h3>
          <h1 className="text-2xl font-bold">My Restaurant</h1>
        </div>
      </div>
      <div>
        <input
          type="search"
          name="search"
          id=""
          placeholder="Search here"
          autoComplete="off"
          onChange={(e) => dispatch(setSearch(e.target.value))}
          className="p-3 border border-gray-400 text-sm rounded-lg outline-none w-full lg:w-[25vw]"
        />
      </div>
    </nav>
  );
};

export default Navbar;
