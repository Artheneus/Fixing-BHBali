import React from "react";
import { CartContext } from "./CartContext";
import { useContext } from "react";
import { getProductData } from "../data/data";

function CartProduct(props) {
  const cart = useContext(CartContext);
  const id = props.id;
  const quantity = props.quantity;
  const productData = getProductData(id);

  return (
    <>
      {/* Mobile Mode */}
      <div className="md:hidden">
        <div className="flex justify-between my-2">
          <h1>{productData.title}</h1>
          <p className="px-2"> {quantity} Items</p>
        </div>
        <div className="flex justify-between mb-3">
          <span className="pt-2">
            {(quantity * productData.price).toLocaleString()} idr
          </span>
          <button
            className="bg-red-500 px-2 py-2 rounded-md text-[12pt]"
            onClick={() => cart.deleteFromCart(id)}
          >
            Remove
          </button>
        </div>
        <hr />
      </div>

      {/* PC Mode */}
      <div className="hidden md:block">
        <div className="flex justify-between my-2">
          <h1>{productData.title}</h1>
          <p className="px-2"> {quantity} Items</p>
        </div>
        <div className="flex justify-between my-3">
          <p>{(quantity * productData.price).toLocaleString()} idr</p>
          <div>
            <button
              className="bg-red-500 px-2 py-2 rounded-md text-[12pt]"
              onClick={() => cart.deleteFromCart(id)}
            >
              Remove
            </button>
          </div>
        </div>
        <hr />
      </div>
    </>
  );
}

export default CartProduct;

//   /*
//    * Tests
//    */
//   const tests = [
//     { num: 0, digits: 1 },
//     { num: 12, digits: 1 },
//     { num: 1234, digits: 1 },
//     { num: 100000000, digits: 1 },
//     { num: 299792458, digits: 1 },
//     { num: 759878, digits: 1 },
//     { num: 759878, digits: 0 },
//     { num: 123, digits: 1 },
//     { num: 123.456, digits: 1 },
//     { num: 123.456, digits: 2 },
//     { num: 123.456, digits: 4 }
//   ];
//   tests.forEach(test => {
//     console.log("nFormatter(%f, %i) = %s", test.num, test.digits, nFormatter(test.num, test.digits));
//   });
