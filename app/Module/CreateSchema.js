const mongoose = require('mongoose');
const CreateSchema = new mongoose.Schema({
   
  Entercategory:{
        type:String,
        // required:true,
        // unique:true,
    },

        
    });
module.exports = mongoose.model("deep",CreateSchema);
