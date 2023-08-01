const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1/blog');
const db = mongoose.connection;

db.once('open', (e)=>{
    if(e){
        console.log('DB Not Connect');
    }
    console.log('DB Is Connect');
})

module.exports = db;