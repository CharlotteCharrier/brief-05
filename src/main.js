import express from 'express';

const host = process.env.HOST ?? 'localhost';
const port = Number(process.env.PORT) || 3000;
const app = express();

//start the server
app.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
})