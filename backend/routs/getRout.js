const express = require('express')
const Singup = require('../schema/singup')
const User = require('../schema/user')
const getRouter = express.Router()
 


getRouter.get('/getuser', async (req, res) => {
    // const userData = req.user
    // console.log("userdata", req)
    const data = await User.find()
    console.log("userdata1", data)
    res.status(200).json(data)
})



module.exports = getRouter