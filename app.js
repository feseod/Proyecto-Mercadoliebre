const express = require('express');
const app = express();
app.use(express.static('public'));

const path = require('path');

const publicPath = path.resolve (__dirname, './public');
app.use (express.static(publicPath));


app.listen(process.env.PORT || 3000, ()=>{
    console.log('Servidor corriendo 3000');
});

app.get('/home', (req,res)=>{
    res.sendFile(__dirname + '/views/home.html');
});

app.get('/login', (req,res)=>{
    res.sendFile(__dirname + '/views/login.html');
});

app.get('/register', (req,res)=>{
    res.sendFile(__dirname + '/views/register.html');
});