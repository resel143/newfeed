const mongoose = require("mongoose");


const newSchema = new mongoose.Schema({
    title:{
        type:String,
        required: true
    },
    description:{
        type:String,
        required:true
    },
    quote:{
        type:String,
    },
    category:{
        type:Array,
        required: true
    },
    url:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    }
})

const Newnew = new mongoose.model("new",newSchema);

module.exports = Newnew;