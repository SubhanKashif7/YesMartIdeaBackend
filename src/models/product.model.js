const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
    productName : {
        type : String,
        required : true,
        lowercase : true,
        default : 'Product'
    },

    avatar : {
        type : String,
        required : true
    },

    productDescription : {
        type : String,
        required : true,
        default : "Product Description"
    },

    productPrice : {
        type : Number,
        required : true
    },

    isProductAvailable : {
        type : Boolean,
        required : true
    }


},{timestamps : true});
const Product = mongoose.model("Product",productSchema);
module.exports =  Product;