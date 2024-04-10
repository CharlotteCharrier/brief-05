import db from '../services/db.js'

export class User {
    username
    name
    password

    /**
     * 
     * @param {string} username pseudo d'utilisateur
     * @param {string} name nom de l'utilisateur
     * @param {string} password mot de passe
     */

    constructor(username, name, password) {
        this.username = username
        this.name = name
        this.password = password
    }

    async save() {
        const client = await db.connect(); //connecte à la bdd
        try {
            const queryText = 'INSERT INTO "user" (username, name, password) VALUES ($1, $2, $3) RETURNING *'; //requête préparée
            const values = [this.username, this.name, this.password]; //assigne les valeurs
            const result = await client.query(queryText, values); //envoie la requête avec en param la requête préparée et les valeurs associées
            return result.rows[0];
        } finally {
            client.release(); // équivalent du client.end() ?
        }
    }

    async findById(userId) {
        const client = await db.connect();
        try {
            const queryText = 'SELECT * FROM "user" WHERE id=$1'
            const values = [userId];
            const result = await client.query(queryText, values);
            return result.rows[0];
        } finally {
            client.release();
        }
    }

    static async findByUsernameAndPassword(username, password) {
        const client = await db.connect();
        try {
            const queryText = 'SELECT * FROM "user" WHERE username = $1 and password = $2';
            const values = [username, password];
            const result = await client.query(queryText, values);
            return result.rows[0];
        } finally {
            client.release();
        }
    }
}