const express=require('express');
const mongoose=require('mongoose');
const mongo=require('./connection.js');

const app=express();

mongo.a();

app.get('/',(req,res) =>{
    res.send('Hola Mundo')
});

app.listen(5000);