const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', function (req, res) {
    res.send({ message: "why we did it!" });
})

app.listen(port, () => {
    console.log(`server is running on port : ${port}`)
});