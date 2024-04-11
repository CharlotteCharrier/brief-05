import { User } from "../models/userModel.js";

export async function getUserById(req, res, next) {
    const userId = req.params.id;
    const user = await User.findById(userId).catch(err => {
        next(err)
    })
    if(user) {
        res.json(user);
    } else {
        res.status(404).json({ error : 'Utilisateur non trouvé'})
    }
}

export async function createUser(req, res, next) {
    const { username, name, password } = req.body;
    const newUser = new User(username, name, password);
    const savedUser = await newUser.save().catch(err => {
        next(err)
    })
    if(savedUser) {
        res.status(201).json(savedUser);
    }
}

export async function getCurrentUser(req, res) {
    const user = req.user;
    if(user) {
        res.json({id: user.id, username: user.username})
    } else {
        console.error('Internal error : user not defined')
        res.status(500).send('internal error')
    }
}