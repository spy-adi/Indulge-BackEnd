const express = require("express");
const app=express();
const db=require("./models");
//middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
//routes
const PORT = process.env.PORT||5000;
db.sequelize.sync({force:true})
.then(()=>{
    app.listen(PORT,()=>{
        console.log("server listening on port 5000");
    })
})
.catch((err)=>{
    console.error(err);
});