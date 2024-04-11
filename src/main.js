import express from 'express';
import cors from 'cors';
import userRoutes from './routers/userRouter.js';
import loginRouter from './routers/loginRouter.js';

const host = process.env.HOST ?? 'localhost'; //s'il y a une variable d'environnement ça la prend sinon localhost
const port = Number(process.env.PORT) || 3000; //s'il y a une var d'env ça la transforme en nombre, sinon port 3000 par défaut
const app = express();

/*** Middlewares ***/
app.use(express.static("public")); //permet d'afficher tout ce qu'il y a dans le dossier public (mes vues)
app.use(express.urlencoded({extended: true})) // lire FormData (accessible in 'req.body')
app.use(express.json()) //for JSON body parsing
app.use(cors());

/*** Routeurs ***/
app.use(loginRouter)
app.use('/users', userRoutes) // Routes users

/*** Initialisation ***/
app.listen(port, host, () => { //Start the server
    console.log(`Server is running on http://${host}:${port}`);
})