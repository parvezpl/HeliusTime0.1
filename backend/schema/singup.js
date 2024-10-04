const mongoose = require('mongoose');
const singupSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        require: true,
    },
    mobile: {
        type: String,
        require: true
    },
    email:{
        type: String,
        require: true
    },
    password:{
        type: String,
        require: true
    }

})

const Singup = new mongoose.model("Singup", singupSchema)
module.exports = Singup;