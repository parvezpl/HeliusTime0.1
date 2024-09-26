const express = require('express')
const Singup = require('../schema/singup')

// const authmiddleware = require('../models/authmiddleware')
const singupGet_router = express.Router()
 

singupGet_router.get('/api/singups', async (req, res) => {
    const data = await Singup.find()
    res.status(200).json(data)
})



module.exports = singupGet_router