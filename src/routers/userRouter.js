import express from 'express'
import { getUserById, createUser } from '../controllers/userController.js'

const router = express.Router()

router.get('/users/:id', getUserById)
router.post('/users', createUser)

export default router