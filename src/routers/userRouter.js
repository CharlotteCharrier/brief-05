import express from 'express'
import { getUserById, createUser, getCurrentUser } from '../controllers/userController.js'
import { requireAuthToken } from '../middlewares/authToken.js'

const router = express.Router()

router.use(requireAuthToken)

router.get('/current', getCurrentUser)
router.get('/:id', getUserById)

export default router