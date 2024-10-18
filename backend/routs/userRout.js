const express = require('express')
const Singup = require('../schema/singup')
const User = require('../schema/user')
const {jwtAuthMiddleware, generateToken} = require('./../jwt')
const userRouter = express.Router()
 

userRouter.post('/createAccount', async (req, res)=>{
    
    try {
        const data =req.body
        const newUser= new User(data)
        const responce = await newUser.save()
        const token = generateToken(responce.id) //contact replace by username 
        res.cookie("token",token)
        token ? res.json({token,newUser}) : res.json(false)
    } catch (error) {
        res.json({"not gen":error})
    }
})


userRouter.post('/userlogin', async (req, res) => {
    try {
        const {username, password} =req.body;
        console.log(username)
        const user= await User.findOne({username: username}); // contact replay by username 
        if(!user || !(await user.comparePassword(password))){
            return res.status(401).json({error:"invalid username or password"})
        }
        const payload = {
            id : user.id,
            name:user.name,
        }
        
        const token = generateToken(payload)
        res.cookie("jwt",token)
        token ? res.json({payload,token}) : res.json(false)
        console.log("login successful")
    } catch(err){
        res.status(500).json({error:"internal server erro"})
    }
})

userRouter.get('/logout', async (req, res) => {
    console.log("log")
    try {
        await res.clearCookie("token")
        console.log("logout successfull")
        res.json("logout successfull")
    } catch(err){
        res.status(500).json({error:"internal server erro"})
    }
})


userRouter.get('/getuser',jwtAuthMiddleware, async (req, res) => {
    const userData = req.user
    // console.log("userdata",userData)
    const data = await User.find()
    res.status(200).json(data)
})

userRouter.get('/token', async (req, res) => {
    // const userData = req.user
    const token= req.cookies.token
    console.log(token)
    res.json(token )
})






module.exports = userRouter