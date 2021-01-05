const mongoose=require('mongoose');

const a=() =>{
    const db= mongoose

    db.connect('mongodb://localhost/NodeServerDB',{ useNewUrlParser: true },{ useUnifiedTopology: true })

    db.connection.once('open',() => {
        console.log('\nConnection to DB successful\n\nPress ctrl+c to stop');
    }).on('error',(error) =>{
        console.log('Connection error', error);
    });
};

module.exports.a=a;