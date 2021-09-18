const express = require("express");
// const ejs = require("ejs");
const app = express();
const path = require("path");
const multer = require("multer");
const bodyParser = require('body-parser');

const storage = multer.diskStorage({
    destination:(req,file,cb) =>{
        cb(null, './public/uploads')
    },
    filename:(req,file, cb) =>{
        console.log(file);
        cb(null, Date.now() + path.extname(file.originalname))
    }
})

const uploaded = multer({storage:storage})

// app.use static
// const static_path = path.join(__dirname,"../public");
app.use(express.static("public"));

// app .set
app.set("view engine", "ejs");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


// get DB
require("./db/conn");

//get model
const addCont = require("./models/contact");
const addNew = require("./models/news");
const newUser = require("./models/login");
const { clearLine } = require("readline");
const port = process.env.PORT || 3000;

app.get("/",(req,res)=>{
    addNew.find({},(err, item)=>{
        res.render("index",{
            newList: item,
            
        })
    })
})
app.get("/home",(req,res)=>{
    addNew.find({},(err, item)=>{
        res.render("index",{
            newList: item,
            
        })
    })
})
app.get("/allnews",(req,res)=>{
    addNew.find({},(err, item)=>{
        res.render("allnews",{
            newList: item, 
        })
    })
})
// edit news GET method
app.get("/edit/:id",(req,res)=>{
    // res.send(req.params.id);
    addNew.find({_id: req.params.id},(err, item)=>{
        item.map(i =>{
            // res.send(i.title);
            res.render("editnews",{
                            id: i._id,
                            title: i.title,
                            description: i.description,
                            author: i.author
                        })
        })
    })
})
// edit news post to update method
app.post("/edited/:id",(req,res)=>{
    console.log(req.body);
    console.log(req.params.id);
    addNew.updateOne({_id:req.params.id},{$set:{title:req.body.title,description:req.body.content}}).then(()=>{console.log("content updated!")}).catch(err => {console.log("error in updation")});
    res.redirect("../allnews");
})
// delete news
app.get("/delete/:id",(req,res)=>{
    addNew.remove({_id:req.params.id},(err, delData)=>{
        res.redirect("../allnews")
    })
    // res.send(req.params.id);
})

app.get("/pages/contact",(req,res)=>{
    addNew.find({},(err, item)=>{
        res.render("pages/contact",{
            newList: item,
            
        })
    })
})
app.get("/pages/single_page/:_id",(req,res)=>{
    addNew.find({},(err, item)=>{
        res.render("pages/single_page",{   
            newList: item,
            page: req.url
        })
    })
})

app.get("/categoryhome",(req,res)=>{
    addNew.find({},(err, item)=>{
        res.render("category-home",{
            newList: item,            
        })
    })
})
app.get("/pages/desh",(req,res)=>{
    addNew.find({},(err, item)=>{
        res.render("pages/desh",{
            newList: item,            
        })
    })
})
app.get("/pages/chhattisgarh",(req,res)=>{
    addNew.find({},(err, item)=>{
        res.render("pages/chhattisgarh",{
            newList: item,            
        })
    })
})
app.get("/pages/dharm-sanskriti",(req,res)=>{
    addNew.find({},(err, item)=>{
        res.render("pages/dharm-sanskriti",{
            newList: item,            
        })
    })
})

app.get("/pages/durg-bhilai",(req,res)=>{
    addNew.find({},(err, item)=>{
        res.render("pages/durg-bhilai",{
            newList: item,            
        })
    })
})

app.get("/pages/fashion",(req,res)=>{
    addNew.find({},(err, item)=>{
        res.render("pages/fashion",{
            newList: item,            
        })
    })
})
app.get("/pages/itihas",(req,res)=>{
    addNew.find({},(err, item)=>{
        res.render("pages/itihas",{
            newList: item,            
        })
    })
})
app.get("/pages/job-career",(req,res)=>{
    addNew.find({},(err, item)=>{
        res.render("pages/job-carrier",{
            newList: item,            
        })
    })
})
app.get("/pages/khel",(req,res)=>{
    addNew.find({},(err, item)=>{
        res.render("pages/khel",{
            newList: item,            
        })
    })
})
app.get("/pages/opinion",(req,res)=>{
    addNew.find({},(err, item)=>{
        res.render("pages/opinion",{
            newList: item,            
        })
    })
})
app.get("/pages/pakvan",(req,res)=>{
    addNew.find({},(err, item)=>{
        res.render("pages/pakvan",{
            newList: item,            
        })
    })
})
app.get("/pages/rajniti",(req,res)=>{
    addNew.find({},(err, item)=>{
        res.render("pages/rajniti",{
            newList: item,            
        })
    })
})
app.get("/pages/sale",(req,res)=>{
    addNew.find({},(err, item)=>{
        res.render("pages/sail",{
            newList: item,            
        })
    })
})

app.get("/pages/videsh",(req,res)=>{
    addNew.find({},(err, item)=>{
        res.render("pages/videsh",{
            newList: item,            
        })
    })
})
// Middleware for Add News Page
app.use("/addnews",(req,res,next)=>{
    res.render("pages/login");
    next();
})

// add news page
app.get("/addnews",(req,res)=>{
    res.render("addnews",{
        error:false
    });
})

// login page
app.get("/pages/login",(req,res)=>{
    res.render("pages/login");
})



// app.post backend

app.post("/login",async (req,res)=>{
    newUser.find({},(err, item)=>{    
        let num = 0;
        item.map(i => {
            if(i.username === req.body.username && i.password === req.body.password){
                num = num+1;
                res.render("addnews",{
                    newPerson: i.username 
                });
            }
        })
        if(num === 0){
            res.render("pages/404.ejs");
        }
    })
})

app.post("/connect",async (req,res)=>{
    // console.log(req.body);
    try{
        const newItem = new addCont({
            name: req.body.name,
            email: req.body.email,
            message:req.body.message
        });
        // saving to database
        const addedContact= await newItem.save();
        res.status(201).send("<h1>Thank You!!</h1>");
    }catch(err){
        res.status(400).send("<h1>Unable to Process!!</h1>");
    }
})
// addnews backend
app.post("/addedNews",uploaded.single("url"),async (req,res)=>{
    let catVal = [];
    if(req.body.country){catVal.push(req.body.country)}
    if(req.body.cg){catVal.push(req.body.cg)}
    if(req.body.politics){catVal.push(req.body.politics)}
    if(req.body.games){catVal.push(req.body.games)}
    if(req.body.opinion){catVal.push(req.body.opinion)}
    if(req.body.overseas){catVal.push(req.body.overseas)}
    if(req.body.history){catVal.push(req.body.history)}
    if(req.body.fashion){catVal.push(req.body.fashion)}
    if(req.body.food){catVal.push(req.body.food)}
    if(req.body.sale){catVal.push(req.body.sale)}
    if(req.body.durgBhilai){catVal.push(req.body.durgBhilai)}
    if(req.body.jobCareer){catVal.push(req.body.jobCareer)}
    if(req.body.religion){catVal.push(req.body.religion)}
    if(catVal.length === 0) {
      `${alert("Click atleast 1 category").render("addnews")}`
    }
    console.log(catVal);
    // catVal.forEach(element => {
    //    if(element === "Politics") {
    //        console.log("Politics me jaane ka shauk");
    //    }
    // });
    try{
        const newItem = new addNew({
            title:req.body.title,
            description: req.body.description,
            // quote: req.body.quote,
            category:catVal,
            url: req.file.filename,
            author: req.body.author
        });
        // saving to database
        const addedNews = await newItem.save();
        res.status(201).send("<h1>Your News has been Added!</h1><a href='../addnews'><h3>Add more news?</h3><a href='../addnews'><button style='color:white;background-color: #4CAF50;width:200px;padding:5px'>Yes</button></a><a href='../home'><button style='color:white;background-color: #f44336;width:200px;padding:5px'>No</button></a>");
    }catch(err){
        // res.status(400).render("addnews");
        throw err;
    }
})


app.listen(port,()=>{
    console.log(`Server running at PORT ${port}`)
})