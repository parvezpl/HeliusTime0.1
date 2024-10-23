
const express = require('express')
const CctnsData = require('../schema/cctns')

const { jwtAuthMiddleware, generateToken } = require('./../jwt')
const cctnsRouter = express.Router()


cctnsRouter.post('/createCctnsAccount', async (req, res) => {

    try {
        const data = req.body
        const newCctns = new Cctns(data)
        const responce = await newCctns.save()
        console.log(responce)
        const token = generateToken(responce.id) //contact replace by username 
        res.cookie("token", token, {
            secure: true,
            httpOnly: true
        })
        res.json({ token, newCctns })
    } catch (error) {
        res.json({ err: "not creacte cctns account " })
    }
})


cctnsRouter.post('/cctnsUserlogin', async (req, res) => {
    try {
        const { username, password } = req.body;
        console.log(username)
        const cser = await Cctns.findOne({ username: username }); // contact replay by username 
        if (!cser || !(await cser.comparePassword(password))) {
            return res.status(401).json({ error: "invalid username or password" })
        }

        const payload = {
            id: user.id,
            name: user.name,
        }

        const token = generateToken(payload)
        res.cookie("token", token, {
            secure: true,
            httpOnly: true
        })
        res.json({ payload, token })
        console.log("login successful")
    } catch (err) {
        res.status(500).json({ error: "internal server erro" })
    }
})

cctnsRouter.get('/cctnsLogout', (req, res) => {
    try {
        res.clearCookie("token")
        console.log("logout successfull")
        res.json("logout successfull")
    } catch (err) {
        res.status(500).json({ error: "internal server erro" })
    }
})


cctnsRouter.get('/getCctnsUserData', jwtAuthMiddleware, async (req, res) => {
    const { id } = req.query;
    const data = await User.findOne({ _id: id })
    res.status(200).json(data)
})


cctnsRouter.post('/createCctnsData', async (req, res) => {

        const data = req.body
        console.log("post", data)
        const newCctns = new CctnsData(data)
        await newCctns.save()
            .then((responce) => {
                res.json(responce)
                console.log('Product saved!')
            })
            .catch((err) => console.error('Error:', err));
})

module.exports = cctnsRouter