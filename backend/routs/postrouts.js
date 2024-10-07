const express = require('express')
const Singup = require('../schema/singup')
const weblinks = require('../schema/weblinks')
const post_router = express.Router()
const {jwtAuthMiddleware, generateToken} = require('./../jwt')

post_router.post('/signup', async (req, res) => {
    try{
        const data = req.body
        console.log(data)
        const newSingup= new Singup(data)
        const responce = await newSingup.save()
        res.status(200).json({responce})
    }catch(err){
        res.json({err})
    }
})

post_router.post('/weblinks', async (req, res)=>{
    try {
        const data =req.body
        const newWebliks= new weblinks(data)
        const responce = await newWebliks.save()
        localStorage.setItem("update", true)
        res.status(200).json({responce: responce, token: token})
    } catch (error) {
        res.json({error})
    }
})




module.exports = post_router