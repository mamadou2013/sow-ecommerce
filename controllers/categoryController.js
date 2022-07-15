const Category = require('../models').Category;
const SubCategory = require('../models').SubCategory;
const Picture = require('../models').Picture;
const Product = require('../models').Product;
const StaticImage = require('../models').StaticImage;


const getAllCategories = async(req, res)=>{
    const categories=[
        {
            name:'Home & Audio Enternteinment',
            picture:"./assets/img/100X100/img4.png",
        },
        {
            name:'Smartphones & Tablets',
            picture:"./assets/img/100X100/img4.png"
        },
        {
            name:'Desktop PCs & Laptops',
            picture:"./assets/img/100X100/img4.png"
        },
        {
            name:'Video Games & Consoles',
            picture:"./assets/img/100X100/img4.png"
        },
        {
            name:'Gadgets & Accesories',
            picture:"./assets/img/100X100/img4.png"
        },
        {
            name:'Photo Cameras',
            picture:"./assets/img/100X100/img4.png"
        },
        {
            name:'Cameras & Photography',
            picture:"./assets/img/100X100/img4.png"
        },
        {
            name:'Accessories',
            picture:"./assets/img/100X100/img4.png"
        },
        {
            name:'Gadgets',
            picture:"./assets/img/100X100/img4.png"
        },
        {
            name:'Computer Components',
            picture:"./assets/img/100X100/img4.png"
        }
    ];
    try{
        const cat = await Category.findAll();
        // console.log(cat);
        res.json({cat})
    }catch(err){
        res.json({err})
    }
    // res.render('category/listCategory', {categories:categories});
}

const createCategory = async(req,res)=>{
    // Category
    // try{
    //     const result = await Category.create({
    //         category_name:'Home & Audio Enternteinment',
    //         category_description:'Home & Audio Enternteinment Home & Audio Enternteinment Home & Audio Enternteinment',
    //         category_picture:'./assets/img/100X100/img4.png'
    //     });
    //     const result = await Category.create({
    //         category_name:'Smatphones & Tablets',
    //         category_description:'Home & Audio Enternteinment Home & Audio Enternteinment Home & Audio Enternteinment',
    //         category_picture:'./assets/img/100X100/img4.png'
    //     }); const result2 = await Category.create({
    //         category_name:'Video Games & Consoles',
    //         category_description:'Home & Audio Enternteinment Home & Audio Enternteinment Home & Audio Enternteinment',
    //         category_picture:'./assets/img/100X100/img4.png'
    //     }); const result3 = await Category.create({
    //         category_name:'Gadgets & Accessories',
    //         category_description:'Home & Audio Enternteinment Home & Audio Enternteinment Home & Audio Enternteinment',
    //         category_picture:'./assets/img/100X100/img4.png'
    //     }); const result4 = await Category.create({
    //         category_name:'Cameras & Photography',
    //         category_description:'Home & Audio Enternteinment Home & Audio Enternteinment Home & Audio Enternteinment',
    //         category_picture:'./assets/img/100X100/img4.png'
    //     }); const result5 = await Category.create({
    //         category_name:'Accessories',
    //         category_description:'Home & Audio Enternteinment Home & Audio Enternteinment Home & Audio Enternteinment',
    //         category_picture:'./assets/img/100X100/img4.png'
    //     }); const result6 = await Category.create({
    //         category_name:'Computer & Components',
    //         category_description:'Home & Audio Enternteinment Home & Audio Enternteinment Home & Audio Enternteinment',
    //         category_picture:'./assets/img/100X100/img4.png'
    //     }); const result7 = await Category.create({
    //         category_name:'Desktop PCs & Laptops',
    //         category_description:'Home & Audio Enternteinment Home & Audio Enternteinment Home & Audio Enternteinment',
    //         category_picture:'./assets/img/100X100/img4.png'
    //     }); const result8 = await Category.create({
    //         category_name:'Photo Cameras',
    //         category_description:'Home & Audio Enternteinment Home & Audio Enternteinment Home & Audio Enternteinment',
    //         category_picture:'./assets/img/100X100/img4.png'
    //     }); const result9 = await Category.create({
    //         category_name:'Gadgets',
    //         category_description:'Home & Audio Enternteinment Home & Audio Enternteinment Home & Audio Enternteinment',
    //         category_picture:'./assets/img/100X100/img4.png'
    //     }); const result10 = await Category.create({
    //         category_name:'Laptops & Computers',
    //         category_description:'Home & Audio Enternteinment Home & Audio Enternteinment Home & Audio Enternteinment',
    //         category_picture:'./assets/img/100X100/img4.png'
    //     }); const result11 = await Category.create({
    //         category_name:'Home Enternteinment',
    //         category_description:'Home & Audio Enternteinment Home & Audio Enternteinment Home & Audio Enternteinment',
    //         category_picture:'./assets/img/100X100/img4.png'
    //     });
    //     const result12 = await Category.create({
    //         category_name:'Musics Headphones',
    //         category_description:'Home & Audio Enternteinment Home & Audio Enternteinment Home & Audio Enternteinment',
    //         category_picture:'./assets/img/100X100/img4.png'
    //     });
    //     res.json({result});
    // }catch(err){
    //     console.log(err);
    //     res.json({err});
    // } 

    // SubCategory
    // try{
    //     const result15 = await SubCategory.create({
    //         sub_name:"Earbuds and In-ear",
    //         sub_description:'Description of the second Sub Category',
    //         categoryId:'12'
    //     });
    //     const result16 = await SubCategory.create({
    //         sub_name:'Headphones',
    //         sub_description:'Description of the second Sub Category',
    //         categoryId:'12'
    //     });
       
    //     const result = await SubCategory.create({
    //         sub_name:"Portable Computer",
    //         sub_description:'Description of the second Sub Category',
    //         categoryId:'10'
    //     });
    //     const result1 = await SubCategory.create({
    //         sub_name:'Desktop Computer',
    //         sub_description:'Description of the second Sub Category',
    //         categoryId:'10'
    //     });
    //     const result2 = await SubCategory.create({
    //         sub_name:'Tablet Laptop',
    //         sub_description:'Description of the second Sub Category',
    //         categoryId:'10'
    //     });
    //     const result3 = await SubCategory.create({
    //         sub_name:'Laptop & Desktop Accessories',
    //         sub_description:'Description of the second Sub Category',
    //         categoryId:'10'
    //     });
    //     const result4 = await SubCategory.create({
    //         sub_name:'Desktop Accessories',
    //         sub_description:'Description of the second Sub Category',
    //         categoryId:'10'
    //     });
    //     const result5 = await SubCategory.create({
    //         sub_name:'Laptops Accesories',
    //         sub_description:'Description of the second Sub Category',
    //         categoryId:'10'
    //     });
    //     const result6 = await SubCategory.create({
    //         sub_name:'Wireless and Bluetooth',
    //         sub_description:'Description of the second Sub Category',
    //         categoryId:'12'
    //     });

    //     const result7 = await SubCategory.create({
    //         sub_name:"Featured Phones",
    //         sub_description:'Description of the second Sub Category',
    //         categoryId:'11'
    //     });
    //     const result8 = await SubCategory.create({
    //         sub_name:'Mobile Phones',
    //         sub_description:'Description of the second Sub Category',
    //         categoryId:'11'
    //     });
    //     const result9 = await SubCategory.create({
    //         sub_name:'Unlocked Phone',
    //         sub_description:'Description of the second Sub Category',
    //         categoryId:'11'
    //     });
    //     const result10 = await SubCategory.create({
    //         sub_name:'Tablet PCs',
    //         sub_description:'Description of the second Sub Category',
    //         categoryId:'11'
    //     });
    //     const result11 = await SubCategory.create({
    //         sub_name:'Tablet Accessories',
    //         sub_description:'Description of the second Sub Category',
    //         categoryId:'11'
    //     });
    //     const result12 = await SubCategory.create({
    //         sub_name:'Featured Tablets',
    //         sub_description:'Description of the second Sub Category',
    //         categoryId:'11'
    //     });
    //     const result13 = await SubCategory.create({
    //         sub_name:'Tablets Accessories',
    //         sub_description:'Description of the second Sub Category',
    //         categoryId:'11'
    //     });
    //     const result14 = await SubCategory.create({
    //         sub_name:'4G LTE Smatphone',
    //         sub_description:'Description of the second Sub Category',
    //         categoryId:'11'
    //     });

    //     res.json({result, result14});
    // }catch(err){
    //     console.log(err);
    //     res.json({err});
    // } 

    // Static images
    // try{
    //     const result1 = await StaticImage.create({
    //         description:'UNDER FAVORABLE SMARTWATCHES',
    //         image_path:'./assets/img/500X380/w4.jpeg'
    //     });
    //     const result2 = await StaticImage.create({
    //         description:'UNDER FAVORABLE SMARTWATCHES',
    //         image_path:'./assets/img/500X380/w1.jpeg'
    //     });
       
    //     const result3 = await StaticImage.create({
    //         description:'UNDER FAVORABLE SMARTWATCHES',
    //         image_path:'./assets/img/500X380/w3.jpeg'
    //     });
        
    //     res.json({result1,result2,result3});
    // }catch(err){
    //     console.log(err);
    //     res.json({err});
    // } 

    // Picture
    // try{
    //     const result1 = await Picture.create({
    //         image:'./assets/img/212X200/img7.jpg',
    //         productId: '1'
    //     });
    //     const result12 = await Picture.create({
    //         image:'./assets/img/212X200/img7.jpg',
    //         productId: '1'
    //     });
    //     const result13 = await Picture.create({
    //         image:'./assets/img/212X200/img7.jpg',
    //         productId: '1'
    //     });
    //     const result2 = await Picture.create({
    //         image:'./assets/img/212X200/img7.jpg',
    //         productId: '2'
    //     });
    //     const result3 = await Picture.create({
    //         image:'./assets/img/212X200/img7.jpg',
    //         productId: '3'
    //     });
    //     const result31 = await Picture.create({
    //         image:'./assets/img/212X200/img7.jpg',
    //         productId: '3'
    //     });
    //     const result4 = await Picture.create({
    //         image:'./assets/img/212X200/img7.jpg',
    //         productId: '4'
    //     });
    //     const result5 = await Picture.create({
    //         image:'./assets/img/212X200/img7.jpg',
    //         productId: '5'
    //     });
    //     const result6 = await Picture.create({
    //         image:'./assets/img/212X200/img7.jpg',
    //         productId: '6'
    //     });
    //     const result61 = await Picture.create({
    //         image:'./assets/img/212X200/img7.jpg',
    //         productId: '6'
    //     });
    //     const result62 = await Picture.create({
    //         image:'./assets/img/212X200/img7.jpg',
    //         productId: '6'
    //     });
    //     const result7 = await Picture.create({
    //         image:'./assets/img/212X200/img7.jpg',
    //         productId: '7'
    //     });
    //     const result71 = await Picture.create({
    //         image:'./assets/img/212X200/img7.jpg',
    //         productId: '7'
    //     });
    //     const result72 = await Picture.create({
    //         image:'./assets/img/212X200/img7.jpg',
    //         productId: '7'
    //     });
    //     const result73 = await Picture.create({
    //         image:'./assets/img/212X200/img7.jpg',
    //         productId: '7'
    //     });
    //     const result8 = await Picture.create({
    //         image:'./assets/img/212X200/img7.jpg',
    //         productId: '8'
    //     });
    //     const result81 = await Picture.create({
    //         image:'./assets/img/212X200/img7.jpg',
    //         productId: '8'
    //     });
    //     const result9 = await Picture.create({
    //         image:'./assets/img/212X200/img7.jpg',
    //         productId: '9'
    //     });
    //     const result91 = await Picture.create({
    //         image:'./assets/img/212X200/img7.jpg',
    //         productId: '9'
    //     });
    //     const result92 = await Picture.create({
    //         image:'./assets/img/212X200/img7.jpg',
    //         productId: '9'
    //     });
    //     const result10 = await Picture.create({
    //         image:'./assets/img/212X200/img7.jpg',
    //         productId: '10'
    //     });
    //     const result11 = await Picture.create({
    //         image:'./assets/img/212X200/img7.jpg',
    //         productId: '11'
    //     });
    //     const result120 = await Picture.create({
    //         image:'./assets/img/212X200/img7.jpg',
    //         productId: '12'
    //     });
    //     const result130 = await Picture.create({
    //         image:'./assets/img/212X200/img7.jpg',
    //         productId: '13'
    //     });
    //     const result131 = await Picture.create({
    //         image:'./assets/img/212X200/img7.jpg',
    //         productId: '13'
    //     });
    //     const result100 = await Picture.create({
    //         image:'./assets/img/212X200/img7.jpg',
    //         productId: '14'
    //     });

    //     const result15 = await Picture.create({
    //         image:'./assets/img/212X200/img7.jpg',
    //         productId: '15'
    //     });
    //     const result151 = await Picture.create({
    //         image:'./assets/img/212X200/img7.jpg',
    //         productId: '15'
    //     });
    //     const result152 = await Picture.create({
    //         image:'./assets/img/212X200/img7.jpg',
    //         productId: '15'
    //     });
    //     res.json({result100,result152});
    // }catch(err){
    //     console.log(err);
    //     res.json({err});
    // }

    // Product
    // try{
    //     const result1 = await Product.create({
    //         product_name:'Samsung Galaxy S5',
    //         product_price:'1700',
    //         product_description:'Air Conditioner',
    //         product_quantity:'30',
    //         discount:'20',
    //         subCategoryId:'11'
    //     });
    //     const result2 = await Product.create({
    //         product_name:'Samsung J4+',
    //         product_price:'1200',
    //         product_description:'Air Conditioner',
    //         product_quantity:'50',
    //         discount:'0',
    //         subCategoryId:'11'
    //     });
    //     const result3 = await Product.create({
    //         product_name:'iphone 9',
    //         product_price:'3000',
    //         product_description:'Air Conditioner',
    //         product_quantity:'150',
    //         discount:'100',
    //         subCategoryId:'11'
    //     });
    //     const result4 = await Product.create({
    //         product_name:'Nokia',
    //         product_price:'900',
    //         product_description:'Air Conditioner',
    //         product_quantity:'250',
    //         discount:'0',
    //         subCategoryId:'11'
    //     });
    //     const result5 = await Product.create({
    //         product_name:'Huawei Y6',
    //         product_price:'750',
    //         product_description:'Air Conditioner',
    //         product_quantity:'3',
    //         discount:'0',
    //         subCategoryId:'11'
    //     });
        
    //     const result6 = await Product.create({
    //         product_name:'Console PS5',
    //         product_price:'3200',
    //         product_description:'Air Conditioner',
    //         product_quantity:'75',
    //         discount:'0',
    //         subCategoryId:'5'
    //     });
    //     const result7 = await Product.create({
    //         product_name:'Manette',
    //         product_price:'500',
    //         product_description:'Air Conditioner',
    //         product_quantity:'50',
    //         discount:'70',
    //         subCategoryId:'5'
    //     });
    //     const result8 = await Product.create({
    //         product_name:'JBL headset',
    //         product_price:'700',
    //         product_description:'Air Conditioner',
    //         product_quantity:'150',
    //         discount:'0',
    //         subCategoryId:'5'
    //     });
    //     const result9 = await Product.create({
    //         product_name:'Gaming Keyboard',
    //         product_price:'900',
    //         product_description:'Air Conditioner',
    //         product_quantity:'150',
    //         discount:'0',
    //         subCategoryId:'5'
    //     });
    //     const result10 = await Product.create({
    //         product_name:'Gaming Mouse',
    //         product_price:'750',
    //         product_description:'Air Conditioner',
    //         product_quantity:'203',
    //         discount:'0',
    //         subCategoryId:'5'
    //     });

    //     const result11 = await Product.create({
    //         product_name:'Samsung',
    //         product_price:'1700',
    //         product_description:'Air Conditioner',
    //         product_quantity:'30',
    //         discount:'0',
    //         subCategoryId:'11'
    //     });
    //     const result12 = await Product.create({
    //         product_name:'Hp',
    //         product_price:'1200',
    //         product_description:'Air Conditioner',
    //         product_quantity:'50',
    //         discount:'0',
    //         subCategoryId:'11'
    //     });
    //     const result13 = await Product.create({
    //         product_name:'Dell',
    //         product_price:'3000',
    //         product_description:'Air Conditioner',
    //         product_quantity:'150',
    //         discount:'0',
    //         subCategoryId:'11'
    //     });
    //     const result14 = await Product.create({
    //         product_name:'Apple',
    //         product_price:'3000',
    //         product_description:'Air Conditioner',
    //         product_quantity:'300',
    //         discount:'0',
    //         subCategoryId:'11'
    //     });
    //     const result15 = await Product.create({
    //         product_name:'Accer',
    //         product_price:'750',
    //         product_description:'Air Conditioner',
    //         product_quantity:'3',
    //         discount:'40',
    //         subCategoryId:'11'
    //     });
        
    //     res.json({result1, result15});
    // }catch(err){
    //     console.log(err);
    //     res.json({err});
    // }
}

module.exports = {
    getAllCategories,
    createCategory
};
