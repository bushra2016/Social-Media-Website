const jwt = require('jsonwebtoken');
const User = require('../models/user-model');

const verfiy_token = (async(req, res, next)=>{
    const auth_header = req.headers['Authorization'] || req.headers['authorization'];
    if(!auth_header){
        const error = 'token is required';
        return next(error);
    }
    const token = auth_header.split(' ')[1];
    try{
        const current_user = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        const user = await User.findOne({_id: current_user.id});
        req.user = user
        next();
    }catch(err){
        const error = 'invalid token';
        return next(error);
    }
})
module.exports = verfiy_token;