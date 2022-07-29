var express = require('express');
const productHelper = require('../helper/product-helper');
var userHelper = require('../helper/user-helper')
var router = express.Router();
var product = require('../helper/product-helper')

/* GET home page. */
router.get('/', function(req, res, next) {
  productHelper.getproduct().then((product)=>{
    console.log(product);
    console.log(product.mobile)
    res.render('index',{product});
  })
  
});
module.exports = router;
