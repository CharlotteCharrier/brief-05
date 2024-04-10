import { User } from "../models/userModel.js";

export async function userLogin(req, res) {
    const { username, password } = req.body;
    const user = await User.findByUsernameAndPassword(username, password); //obligé de la mettre en async parce que la fonction findByUsernameAndPassword() est en async et donc si je mets pas le await devant, le user va être undefined
    if(user) {
        res.json({
            id: user.id,
            username: user.username
        })
    } else {
        res.status(401).send('Echec de la connexion. Veuillez vérifier vos identifiants');
    }
}