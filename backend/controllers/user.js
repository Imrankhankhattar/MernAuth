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
    }
    else {
        res.status(401);
        throw new Error('Invalid email or password')
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
    res.status(200).json(
        {
            message: 'logout'
        }
    )
})
const getUserProfile = asyncHandler(async (req, res) => {
    res.status(200).json(
        {
            message: 'getProfile'
        }
    )
})
const updateUserProfile = asyncHandler(async (req, res) => {
    res.status(200).json(
        {
            message: 'getProfile'
        }
    )
})
export {
    authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile
}