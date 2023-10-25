const mongoose = require('mongoose');
const UsersSchema = new mongoose.Schema({
   
    Testname:{
        type:String, 
        // required:true,
        // unique:true,
    },
    Price:{
        type:Number,
        // required:true,
        // unique:true,
    },
    Defaultvalue:{
        type:String,
        // required:true,
        // unique:true,
    },
    Unit:{
        type:String,
        // required:true,
        // unique:true,
    }
        
    });
module.exports = mongoose.model("users",UsersSchema);



