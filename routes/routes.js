const express = require('express');
const router = express.Router();

//authentication token 
const verifyToken = require("../utils/auth")

//controller
const  authController = require('../controllers/auth.controller');
const categoryController = require('../controllers/category.controller')
const serviceController = require('../controllers/service.controller')

// Login route

router.post('/login' ,authController.login)

// Category APIs

router.post('/category' , verifyToken , categoryController.category)
router.get('/categories' ,verifyToken , categoryController.getcategories)
router.put('/category/:categoryId' ,verifyToken ,categoryController.updateCategoryByID )
router.delete('/category/:categoryId' , verifyToken ,categoryController.deleteCategoryByID )


// Service APIs

router.post('/category/:categoryId/service' , verifyToken ,serviceController.serviceCategoryId )
router.get('/category/:categoryId/services' , verifyToken  , serviceController.getserviceCategoryId)
router.put('/category/:categoryId/service/:serviceId' ,verifyToken , serviceController.updatecategoryIdserviceId )
router.delete('/category/:categoryId/service/:serviceId' , verifyToken , serviceController.deletecategoryIdserviceId)


module.exports = router;
