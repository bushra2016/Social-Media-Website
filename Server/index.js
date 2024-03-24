require('dotenv').config();
const express = require('express');
const app =express();
const middleware =require('./middlewares/require-login');
const bodyParser =require("body-parser");
const database =require("./models/conn-db");
const session = require("express-session");
const path = require('path');
const cors = require('cors');

app.use(express.json());
app.use(express.static(path.join(__dirname, 'Client', 'src')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'Client', 'src', 'index.js'));
});
app.use(bodyParser.urlencoded({extended:false}));
const corsOption = {
   origin: "*",
   methods: "GET,HEAD,PUT,PATCH,POST,DELET",
   credential: true,
};
app.use(cors(corsOption));

app.use(session({
   secret:"bbq chips",
   resave: true,
   saveUninitialized:false
}));

//Routes
const user_route =require('./routes/user-route');
app.use("/", user_route);

//API Routes
const post_api_route = require('./routes/api/posts');
app.use("/", post_api_route);

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

