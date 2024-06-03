import React from "react";
import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { addtoCart } from "../redux/cartSlice";
import { CartContext } from "./CartContext";
import { useContext } from "react";
// import AddCart from "./AddCartPC";

const ProdsPrint = (props) => {
  const product = props.product;
  const cart = useContext(CartContext);
  // console.log(cart.items);
  const productQuantity = cart.getProductQuantity(product.id);

  const step = 1;
  const [nums, setNums] = useState(0);

  const increment = (step) => {
    setNums(nums + step);
  };

  const decrement = (step) => {
    if (nums === 0) {
      return 0;
    } else {
      setNums(nums - step);
    }
  };

  function handleRemoveBtn() {
    if (productQuantity > 0) {
      return (
        <button
          className="bg-red-600 w-[240px] rounded-md font-sm mx-2 py-1 my-1"
          onClick={() => cart.deleteFromCart(product.id)}
        >
          Remove
        </button>
      );
    } else {
      return null;
    }
  }

  return (
    <>
      {/* Mobile Mode */}
      <div className="md:hidden block w-[100%]">
        <div>
          <span className="text-[16pt] pt-1">{product.title}</span>
          <span className="pl-2">@{product.dex}</span>
        </div>
        <div className="flex pt-1 justify-center mt-2 mb-2">
          <button
            className="bg-black w-[50px] rounded-md font-sm mx-2 py-1 text-[#00df9a] items-center"
            onClick={() => cart.addOneToCart(product.id)}
          >
            +
          </button>
          <p className="flex bg-black w-[100px] rounded-md font-sm mx-2 justify-center text-[#00df9a] items-center">
            {productQuantity}
          </p>
          <button
            className="bg-black w-[50px] rounded-md font-sm mx-2 text-[#00df9a] items-center"
            onClick={() => cart.removeOneFromCart(product.id)}
          >
            -
          </button>
        </div>
        {/* <div className="flex justify-center">
          <button
            // onClick={() => dispatch(addtoCart({ title }))}
            onClick={() => cart.addOneToCart(product.id)}
            className="bg-black w-[240px] rounded-md font-sm mx-2 py-1 my-2 text-[#00df9a] items-center"
          >
            Add to Cart
          </button>
        </div> */}
        <div className="my-1">{handleRemoveBtn()}</div>
      </div>

      {/* PC Mode */}
      <div className="hidden md:block w-[100%]">
        <div className="flex justify-between">
          <span className="text-[16pt] pt-1.5">{product.title}</span>

          <div className="flex ml-1 ">
            {/* <AddCart /> */}

            <span className="text-[16pt] pt-1.5 pr-2">@{product.dex}</span>
            <button
              className="bg-black w-[50px] rounded-md font-sm mx-2 py-1 text-[#00df9a] items-center"
              onClick={() => cart.addOneToCart(product.id)}
            >
              +
            </button>
            <p className="flex bg-black w-[100px] rounded-md font-sm mx-2 justify-center pt-0.5 text-[#00df9a] items-center">
              {productQuantity}
            </p>
            <button
              className="bg-black w-[50px] rounded-md font-sm mx-2 text-[#00df9a] items-center"
              onClick={() => cart.removeOneFromCart(product.id)}
            >
              -
            </button>

            {/* <button
              onClick={() => cart.addOneToCart(product.id)}
              className="bg-black w-[200px] rounded-md font-sm mx-2 py-1 text-[#00df9a] items-center"
            >
              Add to Cart
            </button> */}
            <button
              className="bg-reds w-[200px] rounded-md font-sm mx-2 py-2"
              onClick={() => cart.deleteFromCart(product.id)}
            >
              Remove from cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProdsPrint;
