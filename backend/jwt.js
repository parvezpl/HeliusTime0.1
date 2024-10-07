const jwt = require('jsonwebtoken');
require('dotenv').config()

const jwtAuthMiddleware = (req, res, next) => {

    // const authorization = req.headers.authorization
    // if(!authorization) return res.status(401).json({error: 'token not found'})
    // const token = req.headers.authorization.split(' ')[1];
    // const token = res.cookie("token")

    const tokenData = req.headers.cookie
    if (!tokenData) return res.status(401).json({ error:'not token' });
    const token = tokenData.split("=")[1]
    if (!token) return res.status(401).json({ error:'Unauthorized' });

    try {
        const decoded= jwt.verify(token,process.env.JWT_SECRET);
        req.user = decoded
        next();
    } catch (error) {
        res.status(401).json({error:'invalid_token'});
    }
}


const generateToken =(id)=>{
    return jwt.sign({...id}, process.env.JWT_SECRET, {expiresIn:300000})
}

module.exports ={jwtAuthMiddleware, generateToken}