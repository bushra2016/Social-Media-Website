const mongoose = require("mongoose");
const {ObjectId} = mongoose.Schema.Types;

const Schema = mongoose.Schema;
const UserSchema = new Schema({
    firstName:{
        type: String,
        required: true,
        trim: true,
    },
    lastName:{
        type: String,
        required: true,
        trim: true,
    },
    username:{
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    email:{
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    password:{
        type: String,
        required: true,
    },
    profilePic:{
        type: String,
        required:true,
        default:"/images/profilePic.png",
    },
    followers:[{
        type: ObjectId,
        ref:"User",
    }],
    following:[{
        type: ObjectId,
        ref:"User",
    }],
    bio: {
        type: String,
        maxlength: 150,
    }

},{ timestamps:true});

var User = mongoose.model('User',UserSchema);
module.exports = User;