const Router = require("express");
const methods = require("../controllers/product.controller.js")
const router = Router();
router.route('/add').post(methods.addProduct);
router.route("/delete").delete(methods.deleteProduct);
router.route("/update").put(methods.updateProduct);
router.route("/getone").get(methods.getProducts);
router.route("/getall").get(methods.getAllProducts);
module.exports = router;