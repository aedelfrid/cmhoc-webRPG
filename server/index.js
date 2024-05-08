const express = require("express")
require("dotenv").config();

const api = require('./routes/index.js');

const app = express();
const db = require("./config/connection");

const PORT = process.env.PORT || 3002;

const startServer = async () => {
    app.use(express.urlencoded({ extended: false }));
    app.use(express.json());
    app.use(cors());

    app.use('/api', api);

    app.get('/', (req, res) =>
        res.sendFile(path.join(__dirname, '../client/index.html'))
    );

    app.listen(PORT, () => {
        console.log(`Example app listening on port ${PORT}`)
    })
};