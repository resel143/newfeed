const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://reshul:reshul%40123@newsfeeddeploy01.mv98l.mongodb.net/NewsFeed",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
}).then(()=>{console.log(`Connected to DB`)})
.catch((err)=>{console.log(`Unable to Connect to DB`)});