const express = require('express');
const app = express();
const port = process.env.PORT ||  3000;
const bodyParser = require('body-parser');

const postRouter = require('./routs/postrouts');
const getRouter = require('./routs/getrouts');
const userRouter = require('./routs/userRout');
const getRout = require('./routs/getRout');

const db = require('./db');
// const passport = require('./auth');
const cors = require("cors")


const corsOtions = {
    origin:"https://heliustimebackend.onrender.com",
    methods:"GET, POST, PUT, DELETE, PATCH, HEAD",
    credentials:true
}


app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(cors(corsOtions))
// const localAuth = passport.authenticate('local', { session: false })
// app.use(passport.initialize());

app.use('/api', postRouter)
app.use('/api', getRouter)
app.use('/api', getRout)
app.use('/api', userRouter)




app.get('/', (req, res) => {
    res.json("this is home page")
})




// Starting the server
app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});
