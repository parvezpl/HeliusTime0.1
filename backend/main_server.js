const express = require('express');
const app = express();
const port = 3000;
const bodyParser=require('body-parser');

const postRouter = require('./routs/postrouts');
const getRouter = require('./routs/getrouts');
// const Parson = require('./models/parson');
const db = require('./db');

app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(postRouter)
app.use(getRouter)



// Starting the server
app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});
