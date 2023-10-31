const express=require('express');
const app=express();
const hbs=require('hbs');

app.set('view engine','hbs');

const path="D:/Projects/Blogging_Site/templates";

hbs.registerPartials('D:/Projects/Blogging_Site/templates/partials');

app.set('views',path);

app.get('/',(req,res)=>{
    res.render('index');
})

app.get('/about',(req,res)=>{
    res.render('about');
})

app.get('/contact',(req,res)=>{
    res.render('contact');
})

app.get('*',(req,res)=>{
    res.render('404');
})

app.listen(8000,()=>{
    console.log('http://localhost:8000');
})