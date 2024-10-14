const express = require('express')
const Singup = require('../schema/singup')
const User = require('../schema/user')
const getRouter = express.Router()
 


getRouter.get('/getuser', async (req, res) => {
    const userData = req.user
    console.log(userData)
    const data = await User.find()
    res.status(200).json(data)
})



module.exports = getRouter