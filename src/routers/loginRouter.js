import express from 'express'
import { userLogin } from "../controllers/loginController.js";

const router = express.Router()

router.post('/login', userLogin); // Route pour gérer la soumission du formulaire de connexion

export default router;