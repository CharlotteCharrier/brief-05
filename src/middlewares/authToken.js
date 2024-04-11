import { User } from "../models/userModel.js";
import { verifyUserToken } from "../services/jwt.js";

/**
 * 
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 * @param {function} next 
 */

export async function requireAuthToken(req, res, next) {
    const token = req.headers.authorization;
    const userPayload = await verifyUserToken(token).catch(err => {
        res.status(403).json({error: true, message: 'Accès interdit'});
    })

    if(userPayload) {
        console.log('userPayload: ', userPayload);
        req.user = await User.findById(userPayload.user_id)
        next()
    }
}