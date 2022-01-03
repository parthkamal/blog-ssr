const express = require('express');
const app = express();
const path= require('path');
// const {sourceHTML} =require('./middlewares/fileHandler');

//for rendering css through the server we use app.use()
app.use(express.static(__dirname));



app.listen(3000,()=>{
    console.log("application started and running on port 3000")
});
app.get("/",(req,res)=>{
    res.status(200).sendFile(__dirname+'/html/home.html')
})