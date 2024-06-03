const express = require("express");
const Midtrans = require("midtrans-client");
var cors = require("cors");
const uuid = require("uuid");

const app = express();
app.use(cors());
app.use(express.static("public"));
app.use(express.json());

const transaction_id = `ART-${crypto.randomUUID()} + 1`;
let snap = new Midtrans.Snap({
  isProduction: false,
  serverKey: "SB-Mid-server-Lto3VbqVT-ZRR1uhJ3bjusBo",
  // serverKey: "SB-Mid-server-Lto3VbqVT-ZRR1uhJ3bjusBo",
  clientKey: "SB-Mid-client-Q_X0OFdnXb-qiTTB",
});

app.post("/checkout", async (req, res) => {
  const items = req.body.items;
  const gross = req.body.gross;
  const first = req.body.first_name;
  const last = req.body.last_name;
  let line_items = [];
  items.forEach((item) => {
    line_items.push({
      name: item.title,
      price: item.price,
      quantity: item.quantity,
    });
  });
  const data = {
    transaction_details: {
      order_id: transaction_id,
      gross_amount: gross,
    },
  };

  const token = await snap.createTransactionToken(data);
  console.log(items.name);
  res.send(
    JSON.stringify({
      token,
    })
  );
});

app.listen(4000, () => console.log("Listening on port 4000!"));
// const express = require("express");
// var cors = require("cors");
// const stripe = require("stripe")(
//   "sk_test_51PMMtz03zEvJzxxCendxgM02Gf2p4lm3xtiyUPh0BfwLxho6X44IfzxawBoGYN7KRPVzHQsE5rWO22eqtEk7aF8u002CUNq37z"
// );

// const app = express();
// app.use(cors());
// app.use(express.static("public"));
// app.use(express.json());

// app.post("/checkout", async (req, res) => {
//   const items = req.body.items;
//   let lineItems = [];
//   items.forEach((item) => {
//     lineItems.push({
//       price: item.id,
//       quantity: item.quantity,
//     });
//   });

//   const session = await stripe.checkout.sessions.create({
//     line_items: lineItems,
//     mode: "payment",
//     // success_url: "http://localhost:8080/success=true",
//     // cancel_url: "http://localhost:8080/cancel=true",
//     success_url: `${req.headers.origin}/success`,
//     cancel_url: `${req.headers.origin}/cancel`,
//   });

//   res.send(
//     JSON.stringify({
//       url: session.url,
//     }),
//     console.log(session.url)
//   );
// });

// app.listen(4000, () => console.log("Listening on port 4000!"));
