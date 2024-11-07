const express=require('express');
const path=require('path')
const app=express();
const fs=require('fs');
const { log } = require('console');
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));
app.set('view engine','ejs');
app.use(express.static(path.join(__dirname,'public')))

app.get('/',(req,res)=>{
    fs.readdir(`./files`,(err,files)=>{
        res.render("index",{files})
    })
    
})
app.get('/files/:filename',(req,res)=>{
    fs.readFile(`./files/${req.params.filename}`,"utf-8",(err,filedata)=>{
        res.render('show',{filename:req.params.filename,filedata:filedata})
    })
   
})
app.post('/create',(req,res)=>{
   fs.writeFile(`./files/${req.body.title.split(' ').join('')}.txt`,`${req.body.details}`,(err)=>{ 
    console.error(err);
    }) 
   res.redirect('/')
})
 


app.listen(3000,()=>{
    console.log("Running")
})