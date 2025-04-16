const Product = require('../models/product.models');

const getProducts = async (req, res) => {
    try {
        const products = await Product.find({}); // Changed 'product' to 'Product'
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id); // Removed incorrect 'find'
        res.status(200).json(product); // Changed 'Product' to 'product'
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createProduct = async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(201).json(product); // Changed status to 201 for creation
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body, { new: true }); // Added { new: true }

        if (!product) {
            return res.status(404).json({ message: "Product not found" }); // Fixed typo
        }

        res.status(200).json(product); // Removed redundant find
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndDelete(id);

        if (!product) {
            return res.status(404).json({ message: "Product not found" }); // Fixed typo
        }

        res.status(200).json({ message: "Product deleted successfully" }); // Fixed typo
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { // Fixed 'module.export' to 'module.exports'
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
};
