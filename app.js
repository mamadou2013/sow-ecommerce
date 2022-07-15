
const router = require('./routes/router');
const Session = require('express-session');

express = require('express');

const app= express();
const maxAge = 3000 * 60 * 60 * 24
//static files
app.use(express.static('public'));
app.use(express.json());
app.use(Session({
    secret:"the secrect of our ecommerce app",
    cookie:{ httpOnly:true, maxAge: maxAge},
    resave:false,
    saveUninitialized:false
}));
//set template engine
app.set("view engine","ejs");

//set express routing

// app.get('/',(req,res)=>res.redirect('index'));
app.use(router);



app.listen(3300,()=>console.log('server started successfully!'));
