import { User } from "../models/userModel.js";

export async function getUserById(req, res, next) {
    const userId = req.params.id;
    const user = await User.findById(userId).catch(err => {
        next(err)
    })
    if(user) {
        res.json(user);
    }
}

export async function createUser(req, res, next) {
    const { username, name, password } = re.body;
    const newUser = new User(username, name, password);
    const savedUser = await newUser.save().catch(err => {
        next(err)
    })
    if(savedUser) {
        res.status(201).json(savedUser);
    }
}

