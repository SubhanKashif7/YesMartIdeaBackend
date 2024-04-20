const express = require("express");
const cors = require("cors");
const app = express();
const router = require("./routes/product.routes.js")
app.use(cors());
app.use(express.json({
    limit : "14lb"
}));
app.use(express.static("public"));
app.use("/api/v1/product",router)
module.exports = app;