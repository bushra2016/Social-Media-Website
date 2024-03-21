//create server
const express = require('express');
const app =express();
const port =3003;
const middleware =require('./middleware')
const bodyParser =require("body-parser")
const mongoose =require("./database");
const session = require("express-session");


 const server = app.listen(port,() => console.log("server listening on port "+port));

 app.set("view engine", "pug");
 app.set("views","views");

 app.use(bodyParser.urlencoded({extended:false}));
 
 app.use(session({
   secret:"bbq chips",
   resave: true,
   saveUninitialized:false
}))


 //Routes
 const user_route =require('./routes/user-route');
 app.use("/", user_route);
 

 app.get("/",middleware.requireLogin,(req ,res ,next) => {
    var payload = {
        pageTitle :"Home",
        userLoggedIn:req.session.user
    }
    res.status(200).render("home",payload);
 })
