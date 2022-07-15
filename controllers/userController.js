const User = require('../models').User;
const Commande = require('../models').Commande;
const OrderLine = require('../models').OrderLine;
const Category = require('../models').Category;
const ProductLike = require('../models').ProductLike;
const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid');

const createUser = async (req, res)=>{
    const user = req.body;
    const salt = await bcrypt.genSalt();
    user.password = await bcrypt.hash(user.password, salt);
    
    try{
        const userData = await User.findOne({
            where:{
                user_email: user.email
            }
        });
    
        if(!userData){
            const result = await User.create({
                user_name:user.username,
                user_email:user.email,
                user_phone:user.phone,
                user_password:user.password
            });
            console.log(result)
            const userInfo = {id:result.id, username:result.user_name};
            req.session.username = userInfo;
            res.status(200).json({user:result});
        }else{
            res.status(400).json({message:"this email was already used"});
        }
    }catch(e){
        res.status(500).json({message:"the server does not respond, try again later"})
    }
}

const loginUser = async (req, res)=>{
    const user = req.body;

    try{
        // retrieving the user based on the email
        const userData = await User.findOne({
            where:{
                user_email: user.email
            }
        });

        //checking whether the user exists or not
        if(userData){
            const isPasswordMatch = await bcrypt.compare(user.password, userData.user_password);
            if(isPasswordMatch){
                // console.log('logged in')
                const userInfo = {id:userData.id, username:userData.user_name};
                req.session.username = userInfo;
                res.status(200).json({user:userData});
            }else{
                res.status(400).json({message:"The credentials are not correct"});
            }
        }else{
            res.status(404).json({message:"the user does not exist, try to sign in please"});
        }
    }catch(error){
        res.status(500).json({message:"the server does not respond, try again later"});
    }

}

const signinForm = async (req, res)=>{
    
    let User = {};
    try {
        const categories = await Category.findAll();
          if(req.session.username){
            // console.log('session ',req.session.username)
            User = req.session.username;
            // console.log('variable ',User)
          }
          res.render('users/login',{categories:categories, user:User});    
    } catch (error){
        res.json({error:error});
    }
    
}

const likeProduct = async (req, res)=>{
    //console.log('inside product like')
    const productId = req.params.id;
    let User = {};
    // console.log('inside like product');
    // console.log(req.session.username);
    try{
        if(req.session.username){
            User = req.session.username;
            // console.log('inside like product 2');
            const isAlreadyLike = await ProductLike.findOne({ 
                where:{
                    UserId: User.id,
                    ProductId: productId    
                }  
            });
            
            if(!isAlreadyLike){
                await ProductLike.create({
                    likeDate: "2021-08-23",
                    UserId: User.id,
                    ProductId: productId
                });
            }   
        }

        res.redirect('/');
    }catch(err){
        res.status(500).json({message:'the server does not respond '})
    }
}

const orderProducts = async(req, res)=>{
    const carts = req.body;
    const user = req.session.username;
    console.log(user)
    console.log(carts)
    try{
        const command = await Commande.create({
            number: uuidv4(),
            commande_status: false,
            userId: user.id
        });

        if(command.id){
            carts.forEach(async(cart)=>{
                await OrderLine.create({
                    line_number: "Line",
                    line_quantity: cart.quantity,
                    productId: cart.id,
                    commandeId: command.id
                });
            });
        }

        res.status(200).json({result: command});
    }catch(err){
        res.status(500).json({message:'the server does not respond '})
    }
}


const getAllUser = (req, res)=>{

}

module.exports ={
    createUser,
    getAllUser,
    loginUser,
    orderProducts,
    signinForm,
    likeProduct
}