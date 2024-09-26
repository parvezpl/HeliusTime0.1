const express = require('express')
const Singup = require('../schema/singup')
const singup_router = express.Router()


singup_router.post('/api/singups', async (req, res) => {
    try{
        const data = req.body
        const newSingup= new Singup(data)
        const responce = await newSingup.save()
        res.status(200).json({responce})
    }catch(err){
        res.json({err})
    }
})




module.exports = singup_router