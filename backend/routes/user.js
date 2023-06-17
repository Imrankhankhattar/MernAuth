import express from 'express'
import {
    authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile
} from '../controllers/user.js';
import protect from '../middleware/auth.js'

const router = express.Router()

router.post('/', registerUser)
router.post('/auth', authUser)
router.post('/logout', logoutUser)
router.put('/profile',protect, updateUserProfile)
router.get('/profile',protect, getUserProfile)

export default router;