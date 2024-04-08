const bcrypt = require('bcryptjs');
const User = require('../models/user-model');
const Country = require('../models/country-model');
const Post = require('../models/post-model');
const mongoose = require("mongoose");

const login = (async(req ,res ,next) => {
    var payload = req.body;
    console.log(payload);
    if(req.body.logUsername && req.body.logPassword){
        var usernameOrEmail = await User.findOne({ 
            $or:[
                { username: req.body.logUsername},
                { email:  req.body.logUsername}
            ]
         })
 
         if(usernameOrEmail != null){
            var result = await bcrypt.compare(req.body.logPassword, usernameOrEmail.password);
            if(result === true){
                req.session.username = usernameOrEmail;
                req.session.activeUsers = req.session.activeUsers || []; 
                req.session.activeUsers.push(usernameOrEmail);
                //return res.status(200).json({ message: 'Login successful', user: user });
                return res.status(200).json('Login successful');
            } 
         }
         
         payload.errorMessage ="Login credentials incorrect.";
        // return res.status(401).json({ error: 'Login credentials incorrect' });
         return res.status(401).json('error');
    }
    
    payload.errorMessage ="Make sure each field has a valid value.";
    //res.status(400).json({ error: 'Make sure each field has a valid value' });
    res.status(400).json('error');
});


/*
const login = async (req, res, next) => {
   var payload = req.body;
   if (req.body.logUsername && req.body.logPassword) {
       try {
           var user = await User.findOne({
               $or: [
                   { username: req.body.logUsername },
                   { email: req.body.logUsername }
               ]
           });
           if (user != null) {
               var result = await bcrypt.compare(req.body.logPassword, user.password);
               if (result === true) {
                   req.session.user = user;
                   return res.status(200).json('Login successful');
               }
           }
           return res.status(401).json('Login credentials incorrect');
       } catch (error) {
           console.log(error);
           return res.status(500).json('Something went wrong');
       }
   }
   return res.status(400).json('Make sure each field has a valid value');
};
*/

const register = (async (req ,res ,next) => {
   console.log(req.body);
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
       /*.catch((error) => {
          console.log(error);
          payload.errorMessage ="Something went wrong.";
          res.status(200).render("register",payload);
 
       });*/ 
       if (user == null){
          //user not found
          var data = req.body;
          data.password = await bcrypt.hash(password , 10);
 
          User.create(data)
          .then((user) => {
             //req.session.user = user;
             return res.status(200).json('Register successful');
          });
       }
       else{
          //user found
          if (email == user.email){
              payload.errorMessage ="email already in use";
          }
          else {
             payload.errorMessage ="Username already in use";
          }
          //res.status(200).render("register",payload);
          res.status(200).json(payload.errorMessage);
       } 
    }
    else{
       payload.errorMessage ="make sure each field has a valid value.";
       //res.status(200).render("register",payload);
       res.status(200).json(payload);
    }   
});


const logout = (async(req, res, next)=>{
    console.log("req session: ",req.body)
    req.session.activeUsers = req.session.activeUsers || [];
    const index = req.session.activeUsers.indexOf(req.session.username);
    if (index !== -1) {
        req.session.activeUsers.splice(index, 1);
    }
    req.session.destroy(err => {
        if(err){
            console.error('Error destroying session:', err);
            return res.status(500).send('Internal Server Error');
        }
        res.redirect('/login');
    });
});

const get_profile = (async(req, res, next) => {
    try{
        const userId = req.params.userId;
        if (!userId || !mongoose.Types.ObjectId.isValid(userId)) {
            const error = 'Invalid user ID';
            return next(error);
        }
        const user = await User.findById(userId);
        if(!user){
            const error = 'User not found';
            return next(error);
        }
        const data = {
            name: user.firstName + " " +user.lastName,
            handle: user.username,
            photo: user.profilePic,
            followers: user.followers.length,
            following: user.following.length,
            bio: user.bio
        }
        res.status(200).json({ status: 'SUCCESS', data: data });
    }catch(error){
        next(error);
    }
});

const edit_profile = (async(req, res, next) => {
    try{
        const userId = req.params.userId;
        const { firstName, lastName, profilePic, bio } = req.body;
        if (!userId || !mongoose.Types.ObjectId.isValid(userId)) {
            const error = 'Invalid user ID';
            return next(error);
        }
        const updated_user = await User.findByIdAndUpdate(userId, {
            firstName,
            lastName,
            profilePic,
            bio
        }, { new: true });
        if(!updated_user){
            const error = 'User not found';
            return next(error);
        }
        res.status(200).json({ status: 'SUCCESS', data: updated_user });
    }catch(error){
        next(error);
    }
});

const delete_profile = (async(req, res, next) => {
    try {
        const userId = req.params.userId;
        if (!userId || !mongoose.Types.ObjectId.isValid(userId)) {
            const error = 'Invalid user ID';
            return next(error);
        }
        await Post.deleteMany({ postedBy: userId });
        await Country.deleteMany({ postedBy: userId });
        const deleted_user = await User.findByIdAndDelete(userId);
        if (!deleted_user) {
            const error = 'User not found';
            return next(error);
        }
        res.status(200).json({ status: 'SUCCESS', message: 'User deleted successfully' });
    } catch (error) {
        next(error);
    }
});

const follow = (async(req, res, next) => {
    try {
        const { followerId, followeeId } = req.body;
        if (!mongoose.Types.ObjectId.isValid(followerId) || !mongoose.Types.ObjectId.isValid(followeeId)) {
            const error = 'Invalid user ID';
            return next(error);
        }
        const follower = await User.findById(followerId);
        const followee = await User.findById(followeeId);
        if (!follower || !followee) {
            const error = 'Follower or followee not found';
            return next(error);
        }
        if (follower.following.includes(followeeId) || followee.followers.includes(followerId)) {
            const error = 'Follow relationship already exists';
            return next(error);
        }
        follower.following.push(followeeId);
        followee.followers.push(followerId);
        await Promise.all([follower.save(), followee.save()]);
        res.status(200).json({ status: 'SUCCESS', message: 'Follow relationship added successfully' });
    } catch (error) {
        next(error);
    }
});

const unfollow = (async(req, res, next) => {
    try {
        const { followerId, followeeId } = req.body;
        if (!mongoose.Types.ObjectId.isValid(followerId) || !mongoose.Types.ObjectId.isValid(followeeId)) {
            const error = 'Invalid user ID';
            return next(error);
        }
        const follower = await User.findById(followerId);
        const followee = await User.findById(followeeId);
        if (!follower || !followee) {
            const error = 'Follower or followee not found';
            return next(error);
        }
        if (!follower.following.includes(followeeId) || !followee.followers.includes(followerId)) {
            const error = 'Follow relationship does not exist';
            return next(error);
        }
        // Remove followeeId from follower's following list and followerId from followee's followers list
        follower.following = follower.following.filter(id => id.toString() !== followeeId.toString());
        followee.followers = followee.followers.filter(id => id.toString() !== followerId.toString());

        await Promise.all([follower.save(), followee.save()]);

        res.status(200).json({ status: 'SUCCESS', message: 'Unfollowed successfully' });
    } catch (error) {
        next(error);
    }
});

const get_following = (async(req, res, next) => {
    try {
        const userId = req.params.userId;
        if (!userId || !mongoose.Types.ObjectId.isValid(userId)) {
            const error = 'Invalid user ID';
            return next(error);
        }
        const user = await User.findById(userId);
        if (!user) {
            const error = 'User not found';
            return next(error);
        }
        const following = await User.find({ _id: { $in: user.following } }, '_id firstName lastName profilePic username');

        res.status(200).json({ status: 'SUCCESS', data: following });
    } catch (error) {
        next(error);
    }
});

const get_followers = (async(req, res, next) => {
    try {
        const userId = req.params.userId;
        if (!userId || !mongoose.Types.ObjectId.isValid(userId)) {
            const error = 'Invalid user ID';
            return next(error);
        }
        const user = await User.findById(userId);
        if (!user) {
            const error = 'User not found';
            return next(error);
        }
        const followers = await User.find({ _id: { $in: user.followers } }, '_id firstName lastName profilePic username');

        res.status(200).json({ status: 'SUCCESS', data: followers });
    } catch (error) {
        next(error);
    }
});

module.exports = {
    register,
    login,
    logout,
    get_profile,
    edit_profile,
    delete_profile,
    follow,
    unfollow,
    get_following,
    get_followers
};