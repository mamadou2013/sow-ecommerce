const express = require('express');
const ProductController = require('../controllers/productController');
const CategoryController = require('../controllers/categoryController');
const UserController = require('../controllers/userController');

const router = express.Router();

// router.get('/', (req, res)=>{
//     res.redirect('/home');
// });

// router.get('/',(req,res)=>{
//     res.redirect('/products');
// });

router.get('/', (req, res)=>{
    res.redirect('/products')
});

//user's routes
router.post('/register', UserController.createUser);
router.post('/login', UserController.loginUser);
router.get('/signin',UserController.signinForm)
router.get('/logout',(req,res)=>{
    req.session.destroy(err=>{
        res.redirect('/');
    })
});
router.get('/like/:id',UserController.likeProduct);
router.post('/order', UserController.orderProducts);

router.get('/products', ProductController.getAllProduct);

router.get('/admin/create', CategoryController.createCategory );

router.get('/categories', CategoryController.getAllCategories );

router.get('/category/:id', ProductController.products_by_sub_categories );
router.get('/products/:id', ProductController.product_details);
router.get('/cart', ProductController.create_shopping_cart);



module.exports = router;