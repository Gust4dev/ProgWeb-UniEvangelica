const Order = require("../models/Order");

exports.createOrder = async (req, res) => {
  const { user, products, total } = req.body;
  try {
    const newOrder = new Order({ user, products, total });
    await newOrder.save();
    res.status(201).json(newOrder);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

exports.getOrders = async (req, res) => {
  try {
    const orders = await Order.find()
      .populate("user")
      .populate("products.product");
    res.json(orders);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};
