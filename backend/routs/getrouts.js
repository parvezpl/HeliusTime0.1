const express = require('express')
const Singup = require('../schema/singup')
const weblinks = require('../schema/weblinks')
const { jwtAuthMiddleware, generateToken } = require('./../jwt')
const get_router = express.Router()


get_router.get('/singup',  async (req, res) => {
    console.log("hello")
    const data = await Singup.find()
    res.status(200).json(data)
})

get_router.get('/weblinks',  async (req, res) => {
    const data = await weblinks.find()
    res.status(200).json(data)
})



get_router.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;

        const user = await weblinks.findOne({ username: username });

        if (!user || !(await user.comparePassword(password))) {
            return res.status(401).json({ error: "invalid username or password" })
        }

        const payload = {
            id: user.id,
            username: user.username
        }
        const token = generateToken(payload)
        res.json({ token })
    } catch (err) {
        res.status(500).json({ error: "internal server erro" })
    }
})




module.exports = get_router