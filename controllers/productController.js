const Category = require('../models').Category;
const SubCategory = require('../models').SubCategory;
const Picture = require('../models').Picture;
const Product = require('../models').Product;
const ProductLike = require('../models').ProductLike;
const StaticImage = require('../models').StaticImage;


const createProduct = (req,res)=>{
    Product.create({

    });
}
const getAllProduct = async (req,res)=>{
    let categories = [];
    let subCategories = [];
    let products = [];
    let smartTablets =[];
    let musicHeadphones = [];
    let homeEntertainments = [];
    let pictures = [];
    let staticImages = [];
    let likes = [];
    let User = {};

    try{
          if(req.session.username){
            // console.log('session ',req.session.username)
            User = req.session.username;
            // console.log('variable ',User)
            likes = await  ProductLike.findAll({
              where: {
                UserId: User.id,
              }
            });
          }
        subCategories = await SubCategory.findAll();
        categories = await Category.findAll();
        products = await Product.findAll();
        smartTablets = await SubCategory.findAll({
            where: {
              categoryId: 12
            }
          });

          musicHeadphones = await SubCategory.findAll({
            where: {
              categoryId: 10
            }
          });

        homeEntertainments = await SubCategory.findAll({
            where: {
              categoryId: 11
            }
          });

        staticImages = await StaticImage.findAll();
       // console.log(staticImages);

        pictures = await Picture.findAll();
        // console.log(smartTablets);
        likes = await ProductLike.findAll(
          { 
            where:{
                UserId: User.id,
                ProductId: productId    
            }  
          });
        
    }catch(err){
    }
    //console.log('the product that you like ',likes)
    res.render('products/productsList', {
                subCategories:subCategories, 
                products:products, sales:products, 
                rates:products, categories:categories, 
                smartTablets:smartTablets, 
                musicHeadphones:musicHeadphones, 
                homeEntertainments:homeEntertainments, 
                pictures:pictures, staticImages:staticImages, 
                likes: likes, 
                user:User}
                );
}

const product_details = async (req,res)=>{
    const productId = req.params.id;
    let User = {};
    let likes = [];
    try{
      const product = await Product.findByPk(productId);
      const similarProducts = await Product.findAll({
          where:{
            subCategoryId:product.subCategoryId
          }
      });
      const subCategory = await SubCategory.findByPk(product.subCategoryId);
      const categories = await Category.findAll();
      const images = await Picture.findAll();
      const pictures = await Picture.findAll({
        where:{
          productId: product.id
        }
    });
      
    if(req.session.username){
      // console.log('session ',req.session.username)
      User = req.session.username;
      // console.log('variable ',User)
      likes = await  ProductLike.findAll({
        where: {
          UserId: User.id,
        }
      });
    }
      res.render('products/productDetails',{product: product, similarProducts: similarProducts, subCategory:subCategory, pictures: pictures, images: images, categories: categories, user:User, likes:likes});
    }catch(err){
      res.json({message:err});
    }
}

const products_by_sub_categories = async (req, res) => {
  const categoryParam = req.params.id;
  let User = {};
  let likes = [];

  try {
      const categoryList = await Category.findAll();
      const subCategories = await SubCategory.findAll({
          where:{
            categoryId:categoryParam
          }
        });
        const pictures = await Picture.findAll();
        const products = await Product.findAll();

        if(req.session.username){
          // console.log('session ',req.session.username)
          User = req.session.username;
          // console.log('variable ',User)
          likes = await  ProductLike.findAll({
            where: {
              UserId: User.id,
            }
          });
        }
        res.render('products/productsByCategory',{categories:categoryList, subCategories:subCategories, products: products, pictures: pictures, user:User, likes:likes});
  } catch (error) {
    res.json({error:error});
  }
  
}

const create_shopping_cart = async (req,res)=>{
    let carts = [];
    let User = {};
    let likes = [];
    try{
        const categoryList = await Category.findAll();

        if(req.session.username){
          // console.log('session ',req.session.username)
          User = req.session.username;
          // console.log('variable ',User)
          likes = await  ProductLike.findAll({
            where: {
              UserId: User.id,
            }
          });
        }
        res.render('cart', {categories: categoryList, carts: carts, user:User, likes:likes});
    }catch(err){
        res.json({err});
    }
    
}

module.exports = {
    getAllProduct,
    product_details,
    createProduct,
    products_by_sub_categories,
    create_shopping_cart
}

