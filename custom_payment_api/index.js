const express = require("express");

const router = express.Router();

const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY);

const storeItems = new Map([
  [1, { priceInCents: 10000, name: "Item 1" }],
  [2, { priceInCents: 20000, name: "Item 2" }],
]);

router.route("/create-checkout-session").post(async (req, res, next) => {
  try {
    const productPromises = Array.from(storeItems.values()).map(
      async (storeItem) => {
        const product = await stripe.products.create({
          name: storeItem.name,
          description: storeItem.description,
        });

        const price = await stripe.prices.create({
          currency: "usd",
          unit_amount: storeItem.priceInCents,
          product: product.id,
        });

        return { product, price };
      }
    );

    const productPricePairs = await Promise.all(productPromises);

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: req.body.items.map((item, index) => {
        const { product, price } = productPricePairs[index];
        return {
          price: price.id,
          quantity: item.quantity,
        };
      }),
      success_url: `${process.env.CLIENT_URL}/success.html`,
      cancel_url: `${process.env.CLIENT_URL}/cancel.html`,
    });

    res.json({ url: session.url });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

module.exports = router;
