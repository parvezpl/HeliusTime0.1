const express = require('express');
const app = express();
const port = process.env.PORT ||  3000;
const bodyParser = require('body-parser');
const cookieParser= require('cookie-parser')

const postRouter = require('./routs/postrouts');
const getRouter = require('./routs/getrouts');
const userRouter = require('./routs/userRout');
const getRout = require('./routs/getRout');

const db = require('./db');
const cors = require("cors");
const path = require('path');

// const passport = require('./auth');
// const localAuth = passport.authenticate('local', { session: false })
// app.use(passport.initialize());



  const allowlist = ['http://localhost:5173', 'http://example2.com']
  const  corsOptionsDelegate = function (req, callback) {
    var corsOptions;
    if (allowlist.indexOf(req.header('Origin')) !== -1) {
      corsOptions = { origin: true } 
    } else {
      corsOptions = { origin: false } 
    }
    callback(null, corsOptions) // callback expects two parameters: error and options
  }

app.use(bodyParser.json());
app.use(bodyParser.text());

app.use(cors( 
  // (res)=>console.log(res)
  // corsOptionsDelegate
    {
    credentials: true,
    // origin: 'http://localhost:5173',
        origin:"https://heliustime.onrender.com",
    methods:"GET, POST, PUT, DELETE, PATCH, HEAD"
}
))
app.use(cookieParser())
app.use(express.json())

app.use('/api', postRouter)
app.use('/api', getRouter)
app.use('/api', getRout)
app.use('/api', userRouter)


app.get('/api', (req, res) => {
    res.json("this is home page")
})


app.listen(port, () => {
    console.log(`main Server is listening at http://localhost:${port}`);
});
