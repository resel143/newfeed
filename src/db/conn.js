const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://reshul:reshul@123@newsfeeddeploy01.mv98l.mongodb.net/news?retryWrites=true&w=majority",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
}).then(()=>{console.log(`Connected to DB`)})
.catch((err)=>{console.log(`Unable to Connect to DB`)});