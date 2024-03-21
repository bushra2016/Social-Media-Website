const mongoose =require("mongoose");

const Schema = mongoose.Schema;
const UserScheme = new Schema({
    firstName:{
        type : String, required:true, tirm:true
    },
    lastName:{
        type : String, required:true, tirm:true
    },
    username:{
        type : String, required:true, tirm:true, unique:true
    },
    email:{
        type : String,  required:true,  tirm:true,  unique:true
    },
    password:{
         type : String, required:true,
    },
    profilePic:{
        type : String,  required:true, default:"/images/profilePic.png"
    },
  
},{ timestamps:true});

var User = mongoose.model('User',UserScheme);
module.exports=User;