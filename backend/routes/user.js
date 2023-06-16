import express from 'express'
import {
    authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile
} from '../controllers/user.js';

const router = express.Router()

router.post('/', registerUser)
router.post('/auth', authUser)
router.post('/logout', logoutUser)
router.put('/profile', updateUserProfile)
router.get('/profile', getUserProfile)

export default router;