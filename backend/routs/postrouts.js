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
        console.log(responnce)
        res.status(200).json({responce})
    }catch(err){
        res.json({err})
    }
})

post_router.post('/weblinks', async (req, res)=>{
    try {
        const data =req.body
        const newWebliks= new weblinks(data)
        const responnce= await newWebliks.save()
        res.status(200).json(responnce)
        // localStorage.setItem("update", true)
    } catch (error) {
        res.json({error})
    }
})


post_router.delete('/weblinks/:id',jwtAuthMiddleware, async (req, res) => {
    const { id } = req.params;
    try {
        const deletedUser = await weblinks.findByIdAndDelete(id);
        if (!deletedUser) return res.status(404).send('User not found');
        res.send({ message: 'User deleted successfully', deletedUser });
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = post_router