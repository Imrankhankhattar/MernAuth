import jwt  from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import User from "../models/user.js";

const protect = asyncHandler(async(req,res,next)=>{
    const token = req.cookies.jwt;
    if(token){
        try {
            const data = jwt.verify(token,process.env.SECRET_STRING);
            req.user = await User.findById({_id : data.userId}).select('-password')
            next()
        } catch (error) {
            res.status(401);
            throw new Error('Not authorized, invalid token')    
        }
    }
    else{
        res.status(401);
        throw new Error('Not authorized, no token')
    }
})

export default protect