import express from "express";
import Product from "../models/Product.js";

const productRoutes = express.Router();

const getProducts = async (req, res) => {
  const products = await Product.find({});
  res.json(products);
};

const getProduct = async (req, res) => {
  const products = await Product.findById(req.params.id);
  if (products) {
    res.json(products);
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
};

productRoutes.route("/").get(getProducts);
productRoutes.route("/:id").get(getProduct);

export default productRoutes;
