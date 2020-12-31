const mongoose=require('mongoose');

const a=function a(){
    const db= mongoose

    db.connect('mongodb://localhost/NodeServerDB',{ useNewUrlParser: true },{ useUnifiedTopology: true })

    db.connection.once('open',() => {
        console.log('Connection to DB successful');
    }).on('error',(error) =>{
        console.log('Connection error', error);
    });
};

module.exports.a=a;