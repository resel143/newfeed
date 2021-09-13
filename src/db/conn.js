const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/NewsFeed",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
}).then(()=>{console.log(`Connected to DB`)})
.catch((err)=>{console.log(`Unable to Connect to DB`)});