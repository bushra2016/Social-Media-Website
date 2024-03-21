const bcrypt = require('bcryptjs');
const User = require('../models/user-model');

const login = (async(req ,res ,next) => {
    var payload = req.body;
    if(req.body.logUsername && req.body.logPassword){
        var user = await User.findOne({ 
            $or:[
                { username: req.body.logUsername},
                { email:  req.body.logUsername}
            ]
         }).catch((error) => {
            console.log(error);
            payload.errorMessage ="Something went wrong.";
            res.status(200).render("login",payload);
         });
 
         if(user != null){
            var result = await bcrypt.compare(req.body.logPassword, user.password);
            if(result === true){
                req.session.user = user;
                return res.redirect("/");
            } 
         }
         
         payload.errorMessage ="Login credentials incorrect.";
         return res.status(200).render("login",payload);
    }
    
    payload.errorMessage ="Make sure each field has a valid value.";
    res.status(200).render("login");
});

const register = (async (req ,res ,next) => {
    var firstName = req.body.firstName.trim();
    var lastName = req.body.lastName.trim();
    var username = req.body.username.trim();
    var email = req.body.email.trim();
    var password = req.body.password;
 
    var payload= req.body;
 
    if(firstName && lastName && username && email && password){
       var user = await User.findOne({ 
          $or:[
              { username: username},
              { email: email}
          ]
       })
       .catch((error) => {
          console.log(error);
          payload.errorMessage ="Something went wrong.";
          res.status(200).render("register",payload);
 
       });
       if (user== null){
          //user not found
          var data = req.body;
          data.password=await bcrypt.hash(password , 10)
 
          User.create(data)
          .then((user) => {
             req.session.User = user;
             return res.redirect("/");
          })
       }
       else{
          //user found
          if (email== user.email){
              payload.errorMessage ="email already in use.";
          }
          else {
             payload.errorMessage ="Username already in use.";
          }
          res.status(200).render("register",payload);
       } 
    }
    else{
       payload.errorMessage ="make sure each field has a valid value.";
       res.status(200).render("register",payload);
    }   
});

module.exports = {
    register,
    login
};