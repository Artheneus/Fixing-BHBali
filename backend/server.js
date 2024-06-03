const express = require("express");
var cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51PMMtz03zEvJzxxCendxgM02Gf2p4lm3xtiyUPh0BfwLxho6X44IfzxawBoGYN7KRPVzHQsE5rWO22eqtEk7aF8u002CUNq37z"
);

const app = express();
app.use(cors());
app.use(express.static("public"));
app.use(express.json());

app.post("/checkout", async (req, res) => {
  const items = req.body.items;
  let lineItems = [];
  items.forEach((item) => {
    lineItems.push({
      price: item.id,
      quantity: item.quantity,
    });
  });

  const session = await stripe.checkout.sessions.create({
    line_items: lineItems,
    mode: "payment",
    success_url: "https://fixing-bh-bali.vercel.app/success",
    cancel_url: "https://fixing-bh-bali.vercel.app/cancel",
  });

  res.send(
    JSON.stringify({
      url: session.url,
    })
  );
});

app.listen(4000, () => console.log("Listening on port 4000!"));
