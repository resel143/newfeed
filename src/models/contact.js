const mongoose = require("mongoose");


const newSchema = new mongoose.Schema({
   name: {
       type:String,
       required: true
   },
   email:{
       type: String,
       required: true
   },
   message:{
       type:String,
       required: true
   }
})

const addCont = new mongoose.model("contact",newSchema);

module.exports = addCont;