const router = require('express').Router();

const {getAllProduct,getProductById,createProduct}= require('../controller/product')


router.get('/', getAllProduct);
router.get('/:id',getProductById);
router.post('/',createProduct);



module.exports = router;