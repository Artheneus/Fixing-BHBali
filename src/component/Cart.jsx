import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Badge from "@mui/material/Badge";
import { CartContext } from "./CartContext";
import { useContext } from "react";
import CartProduct from "./CartProduct";

//this is style const
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  height: "80%",
  overflow: "scroll",
  display: "block",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 5,
};

const btnStyle = {
  color: "white",
};

export default function Cart() {
  // const cartItems = useSelector((state) => state.cart.cart);
  const gem_name = "";
  const gem_id = "";
  const cart = useContext(CartContext);
  const productsCount = cart.items.reduce(
    (sum, product) => sum + product.quantity,
    0
  );
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const checkout = async () => {
    // await fetch("http://localhost:4000/checkout", {
    //   method: "POST",
    //   body: JSON.stringify({ items: cart.items }),
    // });

    // const requestData = await response.json();
    // console.log(requestData);
    const response = await fetch("http://localhost:4000/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        items: cart.items,
        gross: cart.getTotalCost(),
        first_name: gem_name,
        last_name: gem_id,
      }),
    });
    // .then((response) => {
    //   console.log(response.token);
    // });

    const requestData = await response.json();
    if (requestData) {
      window.snap.pay(requestData.token);
      // cart.items = [];
      handleClose();
    }
  };

  return (
    <>
      <div>
        <Button sx={btnStyle} onClick={handleOpen}>
          <Badge color="secondary" badgeContent={productsCount} variant="dot">
            <AiOutlineShoppingCart className="outline-white" size={24} />
          </Badge>
        </Button>

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              sx={{ mb: 2 }}
            >
              <p className="flex justify-center font-bold">
                Items in your cart :
              </p>
            </Typography>
            <Typography
              component="span"
              id="modal-modal-description"
              sx={{ mt: 2 }}
            >
              {productsCount > 0 ? (
                <>
                  <div>
                    {cart.items.map((currentProduct, id) => (
                      <CartProduct
                        key={id}
                        id={currentProduct.id}
                        quantity={currentProduct.quantity}
                      ></CartProduct>
                    ))}
                    <div className="flex justify-end pr-14">
                      <span>Total:</span>
                    </div>
                    <div className="flex justify-end">
                      <span>{cart.getTotalCost().toLocaleString()} idr</span>
                    </div>
                  </div>

                  <div className="flex justify-between mt-2">
                    <input
                      className="mx-2 rounded-md"
                      type="text"
                      placeholder="name on gem"
                      key={gem_name}
                    />
                    <input
                      className="mx-2 rounded-md"
                      type="number"
                      placeholder="gem Id"
                      key={gem_id}
                    />
                    <button
                      className="bg-blue-500 px-2 py-3 rounded-md text-[12pt] w-[100%]"
                      onClick={checkout}
                    >
                      Check Out
                    </button>
                  </div>

                  {/* <form action={checkout} method="post">
                  <div className="flex justify-between mt-2">
                    <input
                      className="mx-2 rounded-md"
                      type="text"
                      placeholder="name on gem"
                      key={gem_name}
                    />
                    <input
                      className="mx-2 rounded-md"
                      type="number"
                      placeholder="gem Id"
                      key={gem_id}
                    />
                    <button
                      className="bg-blue-500 px-2 py-3 rounded-md text-[12pt] w-[100%]"
                      // onClick={checkout}
                      type="submit"
                    >
                      Check Out
                    </button>
                  </div>
                </form> */}
                </>
              ) : (
                <p>There are no items in your cart!</p>
              )}
            </Typography>
          </Box>
        </Modal>
      </div>
    </>
  );
}
