const Product = require("../models/product.model.js");

// const addProduct = (req, res) => {
//     const { productName, productDesc, productPrice, isProductAvailable } = req.body;

//     const newProduct = new Product({
//         productName,
//         productDesc,
//         productPrice,
//         isProductAvailable,
//     });

//     // Save the new product to the database
//     newProduct.save()
//         .then((product) => {
//             res.status(201).json({ success: true, message: 'Product created successfully', product });
//         })
//         .catch((err) => {
//             res.status(500).json({ success: false, message: 'Error creating product', error: err.message });
//         });
// };

// const deleteProduct = (req, res) => {
//     const productId = req.params.id; // Assuming the ID is passed as a route parameter

//     Product.findByIdAndDelete(productId)
//         .then(() => {
//             res.status(200).json({ success: true, message: 'Product deleted successfully' });
//         })
//         .catch((err) => {
//             res.status(500).json({ success: false, message: 'Error deleting product', error: err.message });
//         });
// };

// const updateProduct = (req, res) => {
//     const productId = req.params.id; // Assuming the ID is passed as a route parameter
//     const updateData = req.body; // Assuming the update data is sent in the request body

//     Product.findByIdAndUpdate(productId, updateData, { new: true })
//         .then((updatedProduct) => {
//             res.status(200).json({ success: true, message: 'Product updated successfully', product: updatedProduct });
//         })
//         .catch((err) => {
//             res.status(500).json({ success: false, message: 'Error updating product', error: err.message });
//         });
// };

// const getAllProducts = (req, res) => {
//     Product.find()
//         .then((products) => {
//             res.status(200).json({ success: true, products });
//         })
//         .catch((err) => {
//             res.status(500).json({ success: false, message: 'Error fetching products', error: err.message });
//         });
// };

// const getProducts = (req, res) => {
//     const { productName, isProductAvailable } = req.body;
//     const query = {};

//     if (productName) {
//         query.productName = productName;
//     }

//     if (isProductAvailable !== undefined) {
//         query.isProductAvailable = isProductAvailable;
//     }

//     Product.find(query)
//         .then((products) => {
//             res.status(200).json({ success: true, products });
//         })
//         .catch((err) => {
//             res.status(500).json({ success: false, message: 'Error fetching products', error: err.message });
//         });
// };

// module.exports = { addProduct, deleteProduct, updateProduct, getAllProducts, getProducts };
