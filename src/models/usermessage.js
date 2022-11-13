
const mongoose = require("mongoose");
const validator = require("validator");


const userSchema = mongoose.Schema({

    feedback:{
        type:String,
        required:true,
        minLength:3
        
    },


    question:{
        type:String,
        required:true,
        minLength:3
        
    },

    code:{
        type:String,
        required:true,
        minLength:3
    }



// Collection




})
const User = mongoose.model("User", userSchema);
module.exports = User;