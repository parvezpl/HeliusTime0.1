require('dotenv').config()

const mongoose = require('mongoose');

// const mongoURL =process.env.HELIUSTIMEDB_URL
const mongoURL ='mongodb://127.0.0.1:27017/heliustimedb'


mongoose.connect(mongoURL, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
})

const db = mongoose.connection

db.on('connected', () => {
    console.log('database connected');
})

db.on('error',(err)=>{
    console.log('error', err);
});

db.on('disconnected', () => {
    console.log('database disconnected');
});

module.exports =db;