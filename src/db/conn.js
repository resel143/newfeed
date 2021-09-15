const mongoURI = 'mongodb+srv://reshul:reshul%40123@newsfeeddeploy01.mv98l.mongodb.net/NewsFeed';

// MONGOLAB_URI = "mongodb+srv://reshul:reshul%40123@newsfeeddeploy01.mv98l.mongodb.net/NewsFeed"

const localMongo = "mongodb://localhost:27017/NewsFeed";

const mongoose = require("mongoose");

mongoose.connect(localMongo || mongoURI,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
}).then(()=>{console.log(`Connected to DB`)})
.catch((err)=>{console.log(`Unable to Connect to DB`)});