import React from "react";
import { Link } from "react-router-dom";
import { FiShoppingBag } from "react-icons/fi";
import { useSelector } from "react-redux";
import logo from "../styles/logo.png";
const Header = () => {
  const { cartItems } = useSelector((state) => state.cart);
  return (
    <nav>
      <img src={logo} alt="logo" /> 

      <div>
        <Link to={"/"}>Home</Link>
        <Link to={"/cart"}>
          <FiShoppingBag />
          <p>{cartItems.length}</p>
        </Link>
      </div>
    </nav>
  );
};

export default Header;