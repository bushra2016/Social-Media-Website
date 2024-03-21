require('dotenv').config();
const express = require('express');
const app =express();
const middleware =require('./middlewares/require-login');
const bodyParser =require("body-parser");
const database =require("./models/conn-model");
const session = require("express-session");

app.set("view engine", "pug");
app.set("views","views");

app.use(bodyParser.urlencoded({extended:false}));
 
app.use(session({
   secret:"bbq chips",
   resave: true,
   saveUninitialized:false
}));

//Routes
const user_route =require('./routes/user-route');
app.use("/", user_route);

app.get("/", middleware.requireLogin, (req ,res ,next) => {
   var payload = {
     pageTitle :"Home",
      userLoggedIn: req.session.user,
   }
   res.status(200).render("home",payload);
});

const server = app.listen(process.env.PORT || 3003,() => {
   console.log("server listening on port " + process.env.PORT || 3003);
});
