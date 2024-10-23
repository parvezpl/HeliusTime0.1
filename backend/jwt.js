const jwt = require('jsonwebtoken');
require('dotenv').config()

let token;
const jwtAuthMiddleware = (req, res, next) => {

    // const authorization = req.headers.authorization
    // if(!authorization) return res.status(401).json({error: 'token not found'})
    // const token = req.headers.authorization.split(' ')[1];
    // const token = res.cookie("token")

    // const tokenData = req.headers.cookie
    // console.log(tokenData)
    // if (!tokenData) return res.status(401).json({ error:'not token' });
    // const token = tokenData.split("=")[1]

    // if(req.headers['authorization']?.split(' ')[1]) {
    //     token = req.headers['authorization']?.split(' ')[1];
    // } else{
    //     token= req.cookies.token
    // }


    const token = req.headers['authorization'];
    
    if (!token) {
        return res.status(403).json({ message: 'Access denied. No token provided.' });
    }
    try {
        const tokenOnly= token.split(' ')[1]
        const decoded = jwt.verify(tokenOnly, process.env.JWT_SECRET); 
        console.log("32"  ,decoded)
        req.user = decoded; 
        next(); 
    } catch (error) {
        return res.json({massage:"token middleware reject"})
    }

}


const generateToken = (id) => {
    return jwt.sign({ ...id }, process.env.JWT_SECRET, { expiresIn: 300000 })
}

module.exports = { jwtAuthMiddleware, generateToken }