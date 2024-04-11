import express from 'express'
import { userLogin, userLogout } from "../controllers/loginController.js";
// import { createUser } from '../controllers/userController.js';

const router = express.Router();

router.post('/login', userLogin); // Route pour gérer la soumission du formulaire de connexion
// router.post('/register', createUser);
router.post('/logout', userLogout)

export default router;