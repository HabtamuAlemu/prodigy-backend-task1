const express = require("express");
const Product = require("../models/product.models.js"); // Optional: If used inside controllers
const router = express.Router();

// Import all controller functions
const {
  getproducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct
} = require('../controller/product.controller.js');

// Define routes
router.get('/', getproducts); // Get all products
router.get("/:id", getProduct); // Get a single product by ID
router.post("/", createProduct); // Create a new product
router.put("/:id", updateProduct); // Update a product by ID
router.delete("/:id", deleteProduct); // Delete a product by ID

// Export the router
module.exports = router;
