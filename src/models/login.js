const mongoose = require("mongoose");

const newSchema= new mongoose.Schema({
    username:{
        type: String,
        required: true
    },
    password:{
        type:String,
        required:true
    },
    loggedin:{
        type:String
    }
});

const newItem= new mongoose.model("log",newSchema);

module.exports= newItem;