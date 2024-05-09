const path = require('path');
const express = require("express")
const routes = require('./controllers');
const ViteExpress = require("vite-express");

require("dotenv").config();

const app = express();
const db = require("./config/connection.js");

const PORT = process.env.PORT || 3002;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(routes);

app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, '../client/index.html'))
);

db.once("open", () => {
    ViteExpress.listen(app, PORT, () => {
        console.log(`Example app listening on port ${PORT}`)
    });
});