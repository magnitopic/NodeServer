const express=require('express');
const path= require('path');
const mongoose=require('mongoose');
const mongo=require('./connection.js');
const members= require('./members.js');
const authRoute=require('./routes/auth'); 
const app=express();
mongo.a();

app.use('/api/user', authRoute)


app.use(express.static(path.join(__dirname, 'web')))

//Da un JSON como respuesta a una petición GET
app.get('/api',(req,res)=>res.json(members))


const PORT=process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server runing on port ${PORT}`));