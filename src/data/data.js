// price_1PMN4I03zEvJzxxCiKQd9K9S
// stripe_id: "price_1PMN2r03zEvJzxxCCLs0v054",

const productsData = [
  {
    id: "price_1PMN2r03zEvJzxxCCLs0v054",
    title: "Super Armory",
    price: 300000,
    dex: "300k idr",
  },
  {
    id: "price_1PMN4I03zEvJzxxCiKQd9K9S",
    title: "Battle Hardened",
    price: 800000,
    dex: "800k idr",
  },
  {
    id: "price_1PMN5a03zEvJzxxCIVjgzdCi",
    // stripe_id: "price_1PMN5a03zEvJzxxCIVjgzdCi",
    title: "Pro Quest+",
    price: 550000,
    dex: "550k idr",
  },
  {
    id: "price_1PMN6c03zEvJzxxC1Z2Pu3OD",
    // stripe_id: "price_1PMN6c03zEvJzxxC1Z2Pu3OD",
    title: "Side Event CC",
    price: 200000,
    dex: "200k idr",
  },
  {
    id: "price_1PMN7Y03zEvJzxxCag0uujNK",
    // stripe_id: "price_1PMN7Y03zEvJzxxCag0uujNK",
    title: "Side Event Blitz",
    price: 200000,
    dex: "200k idr",
  },
  {
    id: "price_1PMN8I03zEvJzxxCfKsrWfkf",
    // stripe_id: "price_1PMN8I03zEvJzxxCfKsrWfkf",
    title: "Side Event MST Sealed",
    price: 600000,
    dex: "600k idr",
  },
  {
    id: "price_1PMNAQ03zEvJzxxCMPNs5o1D7",
    // stripe_id: "price_1PMNAQ03zEvJzxxCMPNs5o1D",
    title: "BH:Bali Custom Playmat",
    price: 300000,
    dex: "300k idr",
  },
  {
    id: "price_1PMND303zEvJzxxCSSlR5rz5",
    // stripe_id: "price_1PMND303zEvJzxxCSSlR5rz5",
    title: "BH:Bali Custom Deckcase",
    price: 300000,
    dex: "300k idr",
  },
  {
    id: "price_1PMNDy03zEvJzxxCvGkRoghN",
    // stripe_id: "price_1PMNDy03zEvJzxxCvGkRoghN",
    title: "BH:Bali Custom Playmat & Deckcase",
    price: 550000,
    dex: "550k idr",
  },
];

function getProductData(id) {
  let productData = productsData.find((product) => product.id === id);

  if (productData == undefined) {
    console.log("Product data does not exist for ID: " + id);
    return undefined;
  }

  return productData;
}

export { productsData, getProductData };
