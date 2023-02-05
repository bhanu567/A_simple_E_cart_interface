import React from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import img1 from "../styles/wheat.JPEG";
import img2 from "../styles/paddy.jpg";

const Home = () => {
  const productList = [
    {
      name: "Wheat",
      price: 1800,
      imgSrc: img1,
      id: "w1",
    },
    {
      name: "Paddy",
      price: 1520,
      imgSrc: img2,
      id: "p2",
    },
  ];

  const dispatch = useDispatch();

  const addToCartHandler = (options) => {
    dispatch({ type: "addToCart", payload: options });
    dispatch({ type: "calculatePrice" });
    toast.success("Added To Cart");
  };
  return (
    <div className="home">
      {productList.map((i) => (
        <ProductCard
          key={i.id}
          imgSrc={i.imgSrc}
          name={i.name}
          price={i.price}
          id={i.id}
          handler={addToCartHandler}
        />
      ))}
    </div>
  );
};

const ProductCard = ({ name, id, price, handler, imgSrc }) => (
  <div className="productCard">
    <img src={imgSrc} alt={name} />
    <p>{name}</p>
    <h4>₹{price}/quintal</h4>
    <button onClick={() => handler({ name, price, id, quantity: 1, imgSrc })}>
      Add to Cart
    </button>
    
  </div>
);

export default Home;