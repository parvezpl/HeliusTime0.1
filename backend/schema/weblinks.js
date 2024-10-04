const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
require('dotenv').config()

const websitesSchema = new mongoose.Schema({
    links: {
        type: String,
        unique: true,
        require: true
    },
    details:{
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

websitesSchema.pre('save', async function(next){
    const  weblinks = this;

    if(!weblinks.isModified('password')) return next();
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(weblinks.password, salt);
        weblinks.password = hashedPassword;
        next();
    } catch (error) {
        return next(error);
    }

})

websitesSchema.methods.comparePassword = async function(candidatePassword){
    try {
        const isMatch = await bcrypt.compare(candidatePassword, this.password)
        return isMatch;
    } catch (error) {
        throw error
    }
}

const Weblinks = new mongoose.model("weblinks", websitesSchema)
module.exports = Weblinks;