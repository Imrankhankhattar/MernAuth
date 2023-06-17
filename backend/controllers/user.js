import asyncHandler from 'express-async-handler'
import User from '../models/user.js'
import generateToken from '../utils/token.js'
const authUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    if (email && password) {
        const user = await User.findOne({ email })
        if (user && (await user.matchPasswords(password))) {
            generateToken(res, user._id)
            res.status(200).json({
                _id: user._id,
                name: user.name,
                email: user.email
            })
        }
        else{
            res.status(401);
            throw new Error('Email or password is incorrect')
        }
    }
    else {
        res.status(401);
        throw new Error('Email and Password are required')
    }

})
const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;
    const userExits = await User.findOne({ email })
    if (userExits) {
        res.status(400)
        throw new Error('User already exists')
    }
    const user = await User.create({
        name,
        email,
        password
    })
    if (user) {
        generateToken(res, user._id)
        res.status(200).json({
            _id: user._id,
            name: user.name,
            email: user.email
        })
    }

    res.status(400);
    throw new Error('Invalid Data')
})
const logoutUser = asyncHandler(async (req, res) => {
    res.cookie('jwt','',{
        httpOnly:true,
        expires:new Date(0)
    })
    res.status(200).json(
        {
            message: 'user logged out.'
        }
    )
})
const getUserProfile = asyncHandler(async (req, res) => {
    const user  = await User.findById(req.user._id)
    const data = {
        _id: user._id,
        name: user.name,
        email: user.email
    }
    res.status(200).json(
        {
            data,
            message: 'profile data '
        }
    )
})
const updateUserProfile = asyncHandler(async (req, res) => {
    const user  = await User.findById(req.user._id)
    if(user){
        user.name = req.body.name || user.name
        user.email = req.body.email || user.email
        if(req.body.password){
            user.password = req.body.password
        }
        const updatedUser = await user.save()
        res.status(200).json(
            {
                _id: updatedUser._id,
                name: updatedUser.name,
                email: updatedUser.email
            }
        )
    }else{
        res.status(401)
        throw new Error('User not found')
    }
})
export {
    authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile
}