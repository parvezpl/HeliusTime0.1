const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
require('dotenv').config()

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        require: true
    },
    contact:{
        type: String,
        require: true
    },
    username:{
        type: String,
    },
    password:{
        type: String,
    }
});

userSchema.pre('save', async function(next){
    const  users = this;

    if(!users.isModified('password')) return next();
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(users.password, salt);
        users.password = hashedPassword;
        next();
    } catch (error) {
        return next(error);
    }

})

userSchema.methods.comparePassword = async function(candidatePassword){
    try {
        const isMatch = await bcrypt.compare(candidatePassword, this.password)
        return isMatch;
    } catch (error) {
        throw error
    }
}

const Users = new mongoose.model("Users", userSchema)
module.exports = Users;